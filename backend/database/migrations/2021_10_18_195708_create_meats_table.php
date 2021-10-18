<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMeatsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('meats', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('name');
            $table->string('maker');
            $table->string('materials');
            $table->string('officialUrl')->nullable();
            $table->string('amazonUrl')->nullable();
            $table->string('rakutenUrl')->nullable();
            $table->string('image');
            $table->date('startDay');
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
        Schema::dropIfExists('meats');
    }
}
