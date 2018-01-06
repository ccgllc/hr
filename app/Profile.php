<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Profile extends Model
{
	protected $guarded = ['id'];

	/** 
	 * set our user->profile relationship
	 */ 
    public function user()
    {
    	return $this->belongsTo(App\User::class);
    }

    public function getAddressAttribute($value)
    {
    	return $this->street . '<br>' . $this->city. ' ' .$this->state . ', ' .$this->zip;
    }
}
