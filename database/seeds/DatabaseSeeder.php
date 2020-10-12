<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
         factory(\App\User::class,20)->create();
         \App\Topic::create(['name' => 'Featured Sites','slug'=>'featured-sites']);
        \App\Topic::create(['name' => 'Useful Links','slug'=>'useful-links']);
        \App\Topic::create(['name' => 'Guides & Tutorials','slug'=>'guides-and-tutorials']);
         factory(\App\Post::class,50)->create();
    }
}
