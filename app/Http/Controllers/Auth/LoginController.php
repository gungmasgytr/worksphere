<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class LoginController extends Controller
{
    public function __construct()
    {
        $this->middleware('guest')->except('logout');
    }

    public function showLoginForm()
    {
        return Inertia::render('Auth/Login', [
            'auth' => [
                'user' => auth()->user()
            ]
        ]);
    }

    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'password' => 'required',
            'selectedRole' => 'required|in:jobseeker,recruiter',
        ]);

        if (Auth::attempt($request->only('email', 'password'), $request->boolean('remember'))) {
            $request->session()->regenerate();
            
            $user = Auth::user();
            
            // Check if selected role matches user role
            if ($request->selectedRole === 'recruiter' && !$user->isRecruiter()) {
                Auth::logout();
                return back()->withErrors([
                    'email' => 'Invalid credentials for recruiter account.',
                ]);
            }
            
            if ($request->selectedRole === 'jobseeker' && !$user->isJobseeker()) {
                Auth::logout();
                return back()->withErrors([
                    'email' => 'Invalid credentials for job seeker account.',
                ]);
            }
            
            if ($user->isRecruiter()) {
                return redirect()->intended('/recruiter/dashboard');
            } else {
                return redirect()->intended('/jobseeker/dashboard');
            }
        }

        return back()->withErrors([
            'email' => 'The provided credentials do not match our records.',
        ]);
    }

    public function logout(Request $request)
    {
        Auth::logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();
        
        return redirect('/');
    }
}
