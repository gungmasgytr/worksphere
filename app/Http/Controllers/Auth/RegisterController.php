<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Inertia\Inertia;

class RegisterController extends Controller
{
    protected $redirectTo = '/home';

    public function __construct()
    {
        $this->middleware('guest');
    }

    public function showRegistrationForm()
    {
        return Inertia::render('Auth/Register', [
            'auth' => [
                'user' => auth()->user()
            ]
        ]);
    }

    public function register(Request $request)
    {
        $this->validator($request->all())->validate();
        
        $user = $this->create($request->all());
        
        auth()->login($user);
        
        if ($user->isRecruiter()) {
            return redirect('/recruiter/dashboard');
        } else {
            return redirect('/jobseeker/dashboard');
        }
    }

    protected function validator(array $data)
    {
        return Validator::make($data, [
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'password' => ['required', 'string', 'min:8', 'confirmed'],
            'role' => ['required', 'in:perusahaan,user'],
        ]);
    }

    protected function create(array $data)
    {
        $user = User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'password' => Hash::make($data['password']),
            'role' => $data['role'],
        ]);

        // Assign role using Spatie
        if ($data['role'] === 'perusahaan') {
            $user->assignRole('recruiter');
        } else {
            $user->assignRole('jobseeker');
        }

        return $user;
    }
}
