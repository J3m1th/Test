<template lang='pug'>
	header.header
		.header__logo(data-aos="test-text-down" data-aos-delay="200" data-aos-duration="1400")
			nuxt-link.header__logo-link(to="/")
				| Logo Logo
		nav.nav.header__nav
			button.nav__btn(type="button" v-if="isMobile" @click="toggleMenu" :class="{'animate': isMenuOpened}" data-aos="test-text-down" data-aos-delay="200" data-aos-duration="1400")
			menu.menu.nav__menu(:class="[{'active': isMenuOpened}, {'menu_mobile' : isMobile}]" )
				li.menu__item(data-aos="test-text-down" data-aos-delay="200" data-aos-duration="350")
					nuxt-link.menu__link(to="'/commercial'") Commercial
				li.menu__item(data-aos="test-text-down" data-aos-delay="300" data-aos-duration="350")
					nuxt-link.menu__link(to="'/editorial'") Editorial
				li.menu__item(data-aos="test-text-down" data-aos-delay="400" data-aos-duration="350")
					nuxt-link.menu__link(to="'/reportage'") Reportage
				li.menu__item(data-aos="test-text-down" data-aos-delay="500" data-aos-duration="350")
					nuxt-link.menu__link(to="'/meet-me'") Meet me
</template>

<script>

let wW;

import AOS from 'aos';

export default {
	data() {
		return {
			isDesktop: true,
			isTablet: false,
			isMobile: false,

			isMenuOpened: false
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
		checkAdaptive() {
			wW = window.innerWidth || document.documentElement.innerWidth;

			if(wW <= 1200) {
				this.isDesktop = false;
				this.isTablet = true;
				this.isMobile = false;
				if(wW <= 650) {
					this.isTablet = false;
					this.isMobile = true;
				}
			} else {
				this.isDesktop = true;
				this.isTablet = false;
			}

		},

		toggleMenu() {
			this.isMenuOpened = !this.isMenuOpened;
		},
	}
}
</script>

<style lang="scss" scoped>
	.header {
		position: fixed;
		top: 0;
		left: 0;
		padding: 42px 48px 42px 48px;

		display: flex;
		justify-content: space-between;

		min-height: 150px;
		width: 100%;
		background: none;
		z-index: 2;

		transition: transform .5s ease;

		&__logo-link {
			// font-family: 'GT America', sans-serif;
			font-family: 'TT Travels', sans-serif;
			font-style: normal;
			font-weight: 900;
			font-size: 16px;
			line-height: 16px;
			letter-spacing: -1px;
			color: #000;
		}
	}

	.nav {
		position: relative;

		&__btn {
			position: absolute;
			top: 40px;
			right: 40px;
			width: 20px;
			height: 9px;

			&::before {
				content: '';
				position: absolute;
				right: 0;
				bottom: 0;

				width: 20px;
				height: 1px;

				background-color: rgba(40, 40, 40, 0.57);
				transition: transform .5s ease;
			}

			&::after {
				content: '';
				position: absolute;
				right: 0;
				top: 0;

				width: 20px;
				height: 1px;

				background-color: rgba(40, 40, 40, 0.57);
				transition: transform .5s ease;
			}

			&.animate {
				&::before {
					transform: scale(.5);
					transform-origin: left;
				}

				&::after {
					transform: scale(.5);
					transform-origin: right;
				}
				
			}
		}
	}

	.menu {
		margin: 0;
    	padding: 0;

		font-family: 'TT Travels', sans-serif;
		font-style: normal;
		// font-weight: 300;
		font-weight: 400;
		font-size: 11px;
		line-height: 13px;
		text-align: right;
		letter-spacing: 0.02em;
		text-transform: capitalize;
		color: #000;

		transition: opacity .5s ease;
		
		&__logo {
			&:hover {
				// cursor: pointer;
			}
		}

		&__item {
			list-style: none;
			padding-bottom: 10px;
			&:last-child {
				padding-bottom: 0;
			}
		}

		&__link {
			transition: color .5s ease;
			&:hover {
				color: #580300;
			}
		}

		&_mobile {
			opacity: 0;
			pointer-events: none;

			&.active {
				opacity: 1;
			}
		}
	}

// media queries
@media (max-width: 1200px) {
	.header {
		padding: 33px 32px 41px 32px;
	}

	.menu {
		font-size: 12px;
		line-height: 14px;
	}
}

@media (max-width: 650px) {
	.header {
		padding: 35px 23px 35px 24px;
	}
	.nav {
		&__btn {
			right: 1px;
    		top: 3px;
		}
	}
	.menu {
		margin-top: 25px;
	}
}

@media (max-width: 400px) {
	.header {
		padding: 18px 20px 18px 20px;
	}
}
</style>

