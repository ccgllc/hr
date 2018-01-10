<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Permission extends Model
{
	protected $fillable = ['name', 'label'];
	
	/** 
	 * Define role relationship
	 *	@return Void
	 */ 
    public function roles()
    {
    	return $this->belongsToMany(Role::class, 'permission_role', 'permission_id', 'role_id');
    }

 }
