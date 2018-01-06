<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateWorkHistoriesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('work_histories', function (Blueprint $table) {
            $table->increments('id');
            $table->smallInteger('desk_experience');
            $table->smallInteger('residential_experience');
            $table->smallInteger('residential_claims');
            $table->smallInteger('residential_cat_experience');
            $table->smallInteger('residential_cat_claims');
            $table->smallInteger('commercial_experience');
            $table->smallInteger('commercial_claims');
            $table->smallInteger('commercial_cat_experience');
            $table->smallInteger('commercial_cat_claims');
            $table->smallInteger('large_loss_experience');
            $table->smallInteger('large_loss_claims');
            $table->smallInteger('large_loss_cat_experience');
            $table->smallInteger('large_loss_cat_claims');
            $table->smallInteger('auto_experience');
            $table->smallInteger('auto_claims');
            $table->smallInteger('inland_marine_experience');
            $table->smallInteger('inland_marine_claims');
            $table->smallInteger('casualty_experience');
            $table->smallInteger('casualty_claims');
            $table->smallInteger('environmental_experience');
            $table->smallInteger('environmental_claims');
            $table->smallInteger('flood_experience');
            $table->smallInteger('flood_claims');
            $table->smallInteger('earthquake_experience');
            $table->smallInteger('earthquake_claims');
            $table->integer('user_id')->unsigned();
            $table->foreign('user_id')->references('id')->on('users')
                ->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('work_histories');
    }
}
