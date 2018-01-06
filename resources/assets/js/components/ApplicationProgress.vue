<template>
	<ul id="applicationProgress" class="steps is-narrow is-medium is-centered has-content-centered">
      <li class="steps-segment" v-bind:class="{'is-active': appData.progress == 1}">
        <router-link to="/" class="has-text-dark">
          <span class="steps-marker">
            <span class="icon">
              <i class="fa fa-vcard"></i>
            </span>
          </span>
          <div class="steps-content">
            <p class="heading">Personal Info</p>
          </div>
        </router-link>
      </li>
      <li class="steps-segment" v-bind:class="{'is-active': appData.progress == 2}">
      	<router-link to="/work-history" class="has-text-dark">
        <span class="steps-marker">
          <span class="icon">
            <i class="fa fa-briefcase"></i>
          </span>
        </span>
        <div class="steps-content">
          <p class="heading">Work History</p>
        </div>
   		</router-link>
      </li>
      <li class="steps-segment" v-bind:class="{'is-active': appData.progress == 3}">
        <router-link to="/certifications" class="has-text-dark">
          <span class="steps-marker">
            <span class="icon">
              <i class="fa fa-certificate"></i>
            </span>
          </span>
          <div class="steps-content">
            <p class="heading">Certifications</p>
          </div>
        </router-link>
      </li>
      <li class="steps-segment" v-bind:class="{'is-active': appData.progress == 4}">
        <span class="steps-marker" v-bind:class="{'is-success': appData.progress == 4}">
          <span class="icon">
            <i class="fa fa-check"></i>
          </span>
        </span>
        <div class="steps-content">
          <p class="heading">Complete</p>
        </div>
      </li>
    </ul>
</template>

<script>
	// import applicationProgressTemplate from './templates/application-progress.template.html';
	import appData from '../data/appData.js';
	export default {
		name: 'ApplicationProgress',
		data () {
			return {
				appData
			}
		}
	}
</script>