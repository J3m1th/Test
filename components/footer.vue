<template lang="pug">
	footer.footer
		.social.footer__social(data-aos="test-text-up" data-aos-delay="200" data-aos-duration="1400" data-aos-offset="-10")
			a.social__inst(href="/" target="_blank") Inst
			a.social__fb(href="/" target="_blank") Fb
</template>

<script>

import AOS from 'aos';
let wW;

export default {
	data: function() {
		return {
			isDesktop: true,
			isTablet: false,
			isMobile: false,
		}
	},
	
	mounted() {
		this.checkAdaptive();
		window.addEventListener('resize', this.checkAdaptive);
	},

	updated() {
		AOS.refreshHard();
	},

	beforeDestroy() {
		window.removeEventListener('resize', this.checkAdaptive);
	},
	
	methods: {
		checkAdaptive: function() {
			wW = window.innerWidth || document.documentElement.innerWidth;

			if (wW <= 1200) {
				this.isDesktop = false;
				this.isTablet = true;
				this.isMobile = false;
				if (wW <= 650) {
					this.isTablet = false;
					this.isMobile = true;
				}
			} else {
				this.isDesktop = true;
				this.isTablet = false;
			}
		},
	},
	
}
</script>

<style lang="scss" scoped>

.footer {
	position: fixed;
	left: 0;
	bottom: 0;
	height: 110px;
	min-height: 110px;
	width: 100%;
	padding: 25px 48px 25px 48px;

	&::before {
		content: '';
		display: inline-block;
		height: 100%;
		vertical-align: middle;
	}
}

.social {
	display: inline-block;
	vertical-align: middle;
	&__inst {
		position: relative;
		margin-right: 72px;

		font-family: 'TT Travels', sans-serif;
		font-size: 11px;
		font-weight: normal;
		line-height: 13px;
		letter-spacing: 0.02em;
		color: #000;

		&::after {
			content: '';
			position: absolute;
			left: 33px;
			top: 50%;
			transform: translateY(-50%);
			width: 56px;
			height: 1px;

			background-color: rgba(#393939, .24);
		}
	}

	&__fb {
		font-family: 'TT Travels', sans-serif;
		font-size: 11px;
		font-weight: normal;
		line-height: 13px;
		letter-spacing: 0.02em;
		color: #000;
	}
}

// media queries
@media (max-width: 1200px) {
	.footer {
		height: 74px;
		min-height: 74px;
		padding: 15px 33px 15px 33px;
	}
}

@media (max-width: 650px) {
	.footer {
		height: 58px;
   		min-height: 58px;
		padding: 10px 24px 10px 24px;
	}
}

@media (max-width: 400px) {
	.footer {
		height: 51px;
		min-height: 51px;
		padding: 10px 21px 10px 21px;
	}
}

</style>