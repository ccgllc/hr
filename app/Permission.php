<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Permission extends Model
{
	/** 
	 * Define role relationship
	 *	@return Void
	 */ 
    public function roles()
    {
    	return $this->belongsToMany(Role::class);
    }
}
