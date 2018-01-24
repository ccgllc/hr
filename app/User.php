<?php

namespace App;

use App\Role;
use App\Traits\Excludable;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable
{
    use Notifiable, Excludable, softDeletes;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password', 'api_token', 'verification_token', 'verified', 'applied'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token', 'api_token', 'verification_token'
    ];

    public function getCreatedAtAttribute($value)
    {
       return \Carbon\Carbon::parse($value)->diffForHumans();
    }

    /** 
     * Define role relationship.
     * @return Void
     */ 
    public function roles()
    {
        return $this->belongsToMany(\App\Role::class);
    }

    public function assignRole($role)
    {
        return $this->roles()->save(
            Role::whereName($role)->firstOrFail()
        );
    }

    public function revokeRole($role)
    {
        return $this->roles()->detach(
                Role::whereName($role)->firstOrFail()
            );
    }

    public function hasRole($role)
    {
         if (is_string($role))
        {
            return $this->roles->contains('name', $role);
        }
        return !! $role->intersect($this->roles)->count();
    }

    public function hasPermissionTo($permission)
    {
        foreach($this->roles as $role) {
            if ($role->hasPermissionTo($permission)) return true;
        }
        return false;
    }

    public function isFrom($location)
    {
        return $this->profile->contains('state', $location) ? true : false;
    }

    public function isConfirmed()
    {
        return $this->attributes['verified'] == 1 ? true : false;
    }

    public function profile()
    {
        return $this->hasOne(Profile::class);
    }

    public function workHistory()
    {
        return $this->hasOne(\App\WorkHistory::class);
    }

    public function adjusterLicenses()
    {
        return $this->hasMany(\App\AdjusterLicense::class);
    }

    public function certifications()
    {
        return $this->hasMany(\App\Certification::class);
    }

    public function softwareExperiences()
    {
        return $this->hasMany(\App\SoftwareExperience::class);
    }

    public function documents()
    {
        return $this->hasMany(\App\Document::class);
    }

    /**
     * Scope a query to only include only users with
     * an employment status of applicant.
     *
     * @param \Illuminate\Database\Eloquent\Builder $query
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeStatus($query, $status)
    {
        return $query->where('status', $status);
    }

      /**
     * Scope a query to only select  recent users 
     *
     * @param \Illuminate\Database\Eloquent\Builder $query
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeRecent($query)
    {
        return $query->orderBy('created_at', 'desc');
    }
}
