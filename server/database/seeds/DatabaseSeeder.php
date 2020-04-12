<?php

use App\Models\Activity;
use App\Models\Comment;
use App\User;
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
        User::create([
            'name' => 'Amitav Roy',
            'email' => 'reachme@amitavroy.com',
            'password' => bcrypt('password'),

            'designation' => 'Software Developer',
            'followers' => 172,
            'following' => 117,
            'friends' => 20,
        ]);

        User::create([
            'name' => 'Arnav Roy',
            'email' => 'arnav@amitavroy.com',
            'password' => bcrypt('password'),

            'designation' => 'Student',
            'followers' => 500,
            'following' => 200,
            'friends' => 50,
        ]);

        factory(Activity::class, 10)->create();

        $this->addActivities();
    }

    private function addActivities()
    {
        $captions = [
            'In this video, I am going to show you how to setup github actions and set up workflows so that you can run your unit tests on every code push. This will also run your tests on any pull request to ensure that the incoming code doesn\'t break any of your code and introduce any bugs.',
            'In this video, we are going to look at how we can use an npm package husky along with lint-staged to format our php files which are staged for git commit using php-cs-fixer. This will allow us to keep our code maintain standard formatting and also allow the developer to not worry about the code format because they know that when they commit the code, this thing will be taken care automatically.',
            "In this video, we are going to handle the profile page Tabs which we will make completely dynamic. The idea is to control the number of tabs and the content to load completely dynamic so that we can just drop it in any page very easily. <br /> The idea is to build the component in such a way, that using a JSON object, we are able to completely control the behaviour of the tabs. Things like how many tabs should be visible, what content to render on click of a Tab, active state, so on and so forth.",
            'In this performance optimisation video on Laravel, I am going to show you how we can save a round trip to the server for an API call by using the Expires header. The idea is, that if there are URLs where data is not changing frequently, then we should use the Expiry headers to let the client (browser know) about the expiry time. So, the browser will not make any API call till the response time expires or it becomes stale.',
            'In this video, I am going to work on converting the HTML of the small card to a React-based component which we can then reuse throughout the application easily by sending data through props.'
        ];

        foreach ($captions as $caption) {
            $commentCount = rand(0, 50);
            $likeCount = rand(0, 50);

            $activity = Activity::create([
                'user_id' => 1,
                'caption' => $caption,
                'type' => 'text',
                'comments' => $commentCount,
                'likes' => $likeCount,
            ]);

            for ($i = 0; $i < $commentCount; $i++) {
                $comment = factory(Comment::class)->make()->toArray();
                $activity->comments()->create($comment);
            }
        }
    }
}
