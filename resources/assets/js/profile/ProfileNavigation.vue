<template>
	<div class="tabs">
	  <ul>
	      <router-link :to="{name: 'home'}" tag="li" exact>
	        <a>
	        	<span class="icon is-small"><i class="fa fa-user-circle-o"></i></span>
	        	<span>Personal Info</span>
	    	</a>
	      </router-link>
	      <router-link :to="{name: 'licenses'}" tag="li">
	        <a>
	        	<span class="icon is-small"><i class="fa fa-address-card-o"></i></span>
	        	<span>Licenses</span>
        	</a>
	      </router-link>
	    <router-link :to="{name: 'documents'}" tag="li">
	      <a>
	        <span class="icon is-small"><i class="fa fa-file-text-o"></i></span>
	        <span>Documents</span>
	      </a>
	    </router-link>
	    <router-link :to="{name: 'certifications'}" tag="li">
	      <a>
	        <span class="icon is-small"><i class="fa fa-certificate"></i></span>
	        <span>Certifications</span>
	      </a>
	    </router-link>
	    <router-link :to="{name: 'workHistory'}" tag="li">
	      <a>
	        <span class="icon is-small"><i class="fa fa-briefcase"></i></span>
	        <span>Work History</span>
	      </a>
	   	</router-link>
	  </ul>
	</div><!-- end tabs -->
</template>

<script>
	export default {
		name: 'ProfileNavigation',
		data() {
			return {
				
			}
		}
	}
</script>