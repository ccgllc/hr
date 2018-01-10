<?php

namespace App;

use App\Permission;
use Illuminate\Database\Eloquent\Model;

class Role extends Model
{

	protected $fillable = ['name', 'label'];

	/** 
	 * Assign a permission to a role.
	 * @param App\Permission
	 */ 
	public function givePermissionTo(Permission $permission)
	{
		$this->permissions()->save($permission);
	}

	/** 
	 * Check if a role has a permission.
	 * @param String
	 */ 
	public function hasPermissionTo($permission)
	{
		if (is_string($permission)) {
			return $this->permissions->contains('name', $permission);
		}
	}

	/** 
	 * Define user relationship. 
	 * @return Void
	 */ 
    public function users()
    {
    	return $this->belongsToMany(User::class);
    }

    /** 
     * Define permissions relationship.
     * @return Void
     */ 
    public function permissions()
    {
    	return $this->belongsToMany(Permission::class);
    }

    public function scopeOfType($query, $type)
    {
    	return $query->where('name', $type);
    }
}
