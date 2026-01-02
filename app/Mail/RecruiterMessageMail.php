<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Address;
use Illuminate\Queue\SerializesModels;
use Illuminate\Mail\Mailables\Envelope;

class RecruiterMessageMail extends Mailable
{
    use Queueable, SerializesModels;

    public $subject;
    public $message;
    public $recruiter;
    public $job;

    /**
     * Create a new message instance.
     */
    public function __construct($subject, $message, $recruiter, $job)
    {
        $this->subject = $subject;
        $this->message = $message;
        $this->recruiter = $recruiter;
        $this->job = $job;
    }

    /**
     * Get the message envelope.
     */
    public function envelope(): Envelope
    {
        return new Envelope(
            subject: $this->subject,
            from: new \Illuminate\Mail\Mailables\Address($this->recruiter->email, $this->recruiter->name . ' - ' . $this->recruiter->recruiterProfile->company_name),
        );
    }

    /**
     * Get the message content definition.
     */
    public function content(): Content
    {
        return new Content(
            view: 'emails.recruiter-message',
            with: [
                'emailMessage' => $this->message,
            ],
        );
    }

    /**
     * Get the attachments for the message.
     *
     * @return array<int, \Illuminate\Mail\Mailables\Attachment>
     */
    public function attachments(): array
    {
        return [];
    }
}
