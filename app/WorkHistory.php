<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class WorkHistory extends Model
{
    protected $guarded = ['id'];

    /** 
     * setup our relationsip to the user.
     */ 
    public function user()
    {
    	return $this->belongsTo(App\User::class);
    }
}
