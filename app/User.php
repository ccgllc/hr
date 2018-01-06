<?php

namespace App;

use App\Role;
use App\Traits\Excludable;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable
{
    use Notifiable, Excludable;

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
        'password', 'remember_token', //'api_token'
    ];

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

    public function isConfirmed()
    {
        return $this->attributes['verified'] == 1 ? true : false;
    }

    public function profile()
    {
        return $this->hasOne(\App\Profile::class);
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

    // public function scopeAdmin($query)
    // {
        
    // }

    // public function scopeRecent($query)
    // {

    // }



    // public function setApiTokenAttribute($value)
    // {
    //     $this->attributes['api_token'] = str_random(60);
    // }

    // public function setVerificationTokenAttribute($value)
    // {
    //     $this->attributes['verification_token'] = str_random(60);
    // }
}
