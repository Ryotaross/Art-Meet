<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateGolfsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('golfs', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('name');
            $table->string('address');
            $table->string('price');
            $table->string('courseInfo');
            $table->string('phone')->nullable();
            $table->string('hp')->nullable();
            $table->string('moreInfo')->nullable();
            $table->string('image');
            $table->double('lat', 22, 18);
            $table->double('lng', 22, 18);
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
        Schema::dropIfExists('golfs');
    }
}
