@component('mail::message')

# **{{ $user->name }},**
<br>
You are receiving this email because we received a password reset request for your account.

@component('mail::button', ['url' => "http://hr.ccgops.net/password/reset/$token"])
Reset Password
@endcomponent

If you did not request this email, If you did not request a password reset, no further action is required.

* * *

If you’re having trouble clicking the "Reset Password" button, copy and paste the URL below into your web browser:<br>
[http://hr.ccgops.net/password/reset/{{$token}}"](http://hr.ccgops.net/password/reset/{{$token}})


Regards,<br>
**Claim Consultant Group**
@endcomponent
