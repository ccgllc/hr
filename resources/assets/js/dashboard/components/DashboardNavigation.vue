<template>
	<div class="tabs" style="margin-bottom: 5rem">
	  	<ul>
		    <li class="is-active"><a href="/dashboard"><span class="icon"><i class="fa fa-tachometer"></i></span>Overview</a></li>
		    <li><a href="/users"><span class="icon"><i class="fa fa-user-circle-o"></i></span>Manage Users</a></li>
		    <li><a href="/roles"><span class="icon"><i class="fa fa-users"></i></span>Mange Roles</a></li>
		    <li><a href="#"><span class="icon"><i class="fa fa-envelope"></i></span>Engagement</a></li>
	  	</ul>
	</div>
</template>

<script>
	export default {
		name: "DasboardNavigation",
		data() {
			return {

			}
		}
	}
</script>