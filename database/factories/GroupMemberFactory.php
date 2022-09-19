<?php

use Faker\Generator as Faker;
use ProcessMaker\Models\Group;
use ProcessMaker\Models\User;
use ProcessMaker\Models\GroupMember;

/**
 * Model factory for a Group
 */
$factory->define(GroupMember::class, function (Faker $faker) {
    return [         
        'member_id' => function () {
            return factory(User::class)->create()->getKey();
        },
        'member_type' => User::class,
        'group_id' => function () {
            return factory(Group::class)->create()->getKey();
        }
    ];
});
