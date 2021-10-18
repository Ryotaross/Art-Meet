<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Meat extends Model
{
    //
  public function tags(): BelongsToMany
  {
    return $this->belongsToMany('App\Tag')->withTimestamps();
  }
  public function user(): BelongsTo
  {
      return $this->belongsTo('App\User');
  }
  public function likes(): BelongsToMany
  {
    return $this->belongsToMany('App\User', 'likes')->withTimestamps();
  }
}
