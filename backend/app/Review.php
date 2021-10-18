<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Review extends Model
{
    //
  public function user(): BelongsTo
  {
    return $this->belongsTo('App\User');
  }
  public function meat(): BelongsTo
  {
    return $this->belongsTo('App\Meat');
  }
  
}
