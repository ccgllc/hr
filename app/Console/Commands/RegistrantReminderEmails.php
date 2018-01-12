<?php

namespace App\Console\Commands;

use \App\Mail\RegistrantReminder;
use \App\User;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Mail;

class RegistrantReminderEmails extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'registrants:remind';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Remind registrants to complete their applications.';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        $registrants = User::where(function($query) {
            $query->where('verified', '=', 0)
                ->orWhere('applied', '=', 0);
        })->get();

        foreach($registrants as $registrant) {
            Mail::to($registrant->email)->send(new RegistrantReminder($registrant));
        }
    }
}
