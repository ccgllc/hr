<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Document extends Model
{
	// public $filepath;
	protected $fillable = ['name', 'file_path', 'mime_type', 'user_id'];

	public function __construct()
	{
		// $this->filepath = env('USER_DOCUMENTS_FILE_PATH');
	}

	/** 
	 * Set the user relation. 
	 */ 
    public function user()
    {
    	return $this->belongsTo(User::class);
    }

     /**
     * Scope a query to only include only resume documents.
     *
     * @param \Illuminate\Database\Eloquent\Builder $query
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeResumes($query)
    {
        return $query->where('type', 'resume');
    }
}
