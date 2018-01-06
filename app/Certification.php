<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Certification extends Model
{
    protected $guarded = ['id'];

    /** 
     * set User realtionship
     */ 
	 public function user()
	{
		return $this->belongsTo(App\User::class);
	}

	public function scopeOfType($query, $type)
	{
		return $query->where('type', $type);
	}
}