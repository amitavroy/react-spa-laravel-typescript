<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

class AppRefresh extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:ref';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Refresh the app';

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
        $this->call('migrate:refresh');
        $this->call('db:seed');
        $this->call('passport:keys', ['--force' => true]);
        $this->call('passport:install', ['--force' => true]);
    }
}
