<?php

namespace Pdavila\Chat;

use Illuminate\Database\Eloquent\Model;

class Message extends Model
{

    /**
     * @var array
     */
    protected $fillable = [
        'message'
    ];

    /**
     * A message belong to a user
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
