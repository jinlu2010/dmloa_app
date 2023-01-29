<template>
	<view class="cal">
		<view class="cal-top">
			<text ref="t1" @click="open">{{nowSelectDateString}}</text>
		</view>
		<uni-calendar ref="calendar" class="uni-calendar--hook" :clear-date="true" :date="info.date" :insert="info.insert"  :startDate="info.startDate" :endDate="info.endDate" :showMonth="false" @confirm="confirm" @close="close" />

		<view class="cal-content">
			<view class="cal-ul cal-weeks">
				<view class="cal-li" v-for="(item,i) of baseData.weekTitles" :key="i">
					<text>{{item}}</text>
				</view>
			</view>

			<swiper :current="current" ref="calSwiper" class="cal-swiper" :duration="200" circular
				@animationfinish="swiperFisnish">
				<swiper-item v-for="(days,i) of weeks" :key="i">
					<view class="cal-ul cal-days">
						<view class="cal-li" v-for="(item,j) of days" :key="j" @click="changeSelected(item)">
							<view class="cal-day-li"
								:class="{'cal-day-li-selected':item.timeSpan == baseData.selectedDate.timeSpan}">
								<text>{{item.d}}</text>
							</view>
						</view>
					</view>
				</swiper-item>
			</swiper>
		</view>

		<!-- <pgb-tabbar ref="t2"></pgb-tabbar> -->
	</view>
</template>

<script>
	/**
	 * weekCalendar 周日历选择组件
	 * @description 日历选择某一天的组件
	 * @bug 因是使用swiper组件开发快速滑动多屏 无法触发 @animationfinish 导致展示异常
	 * @property {Number} defaultDate 默认时间时间戳
	 * @event {Function} changeDate 当前选中日期发生改变
	 * @example <chenmushan-week-calendar @changeDate="changeDate"></chenmushan-week-calendar>
	 */
	
	function getDate(date, AddDayCount = 0) {
		if (!date) {
			date = new Date()
		}
		if (typeof date !== 'object') {
			date = date.replace(/-/g, '/')
		}
		const dd = new Date(date)

		dd.setDate(dd.getDate() + AddDayCount) // 获取AddDayCount天后的日期

		const y = dd.getFullYear()
		const m = dd.getMonth() + 1 < 10 ? '0' + (dd.getMonth() + 1) : dd.getMonth() + 1 // 获取当前月份的日期，不足10补0
		const d = dd.getDate() < 10 ? '0' + dd.getDate() : dd.getDate() // 获取当前几号，不足10补0
		return {
			fullDate: y + '-' + m + '-' + d,
			year: y,
			month: m,
			date: d,
			day: dd.getDay()
		}
	}
	export default {
		props: {
			defaultDate: {
				type: Number,
				default: 0
			}
		},
		data() {
			return {
				weeks: [],
				propDate: null,
				current: 0,
				baseData: {
					weekTitles: ['日', '一', '二', '三', '四', '五', '六'],
					current: 0,
					selectedDate: {
						d: null, // 在当前月份中的天
						ym: '', // 年月拼接
						timeSpan: 0, // 时间戳
					}
				},
				showCalendar: false,
				info: {
					range: true,
					selected: []
				}
			};
		},
		mounted() {
			this.propDate = this.defaultDate == 0 ? new Date() : new Date(this.defaultDate);
			this.initData();
		},
		
		methods: {
			open() {
				this.$refs.calendar.open()
			},
			close() {
				console.log('弹窗关闭');
			},
			confirm(e) {
				console.log('confirm 返回:', e)
				var time = new Date(e.fulldate).getTime();
				if (this.baseData.selectedDate.timeSpan != time) {
					this.$set(this.baseData, 'selectedDate', {
						d:e.date,
						m: new Date(time),
						timeSpan: time,
						ym: e.fulldate
					});
				
					this.$emit('changeDate', this.baseData.selectedDate);
				}
				console.log("baseDate1",this.baseData)
				let lastSat =  this.baseData.selectedDate.m; 

				while (lastSat.getDay() != 6) lastSat.setDate(lastSat.getDate() + 1);
				
				this.$set(this.weeks, 0, this.getWeekDaysByLastSat(lastSat));
				this.$set(this.weeks, 1, this.getWeekDaysByWeeks(this.weeks[0], true));
				this.$set(this.weeks, 2, this.getWeekDaysByWeeks(this.weeks[0], false));
				console.log('weeks1',this.weeks)
				this.current = 0;
			},
			
			initData() {
				let lastSat = new Date(this.propDate);
				console.log('lastSat',lastSat)
				let month = lastSat.getMonth() + 1 < 10 ? "0" + (lastSat.getMonth() + 1) : lastSat.getMonth() + 1
				this.$set(this.baseData, 'selectedDate', {
					d: lastSat.getDate(),
					ym: `${lastSat.getFullYear()}-${month}-${lastSat.getDate()}`,
					timeSpan: +lastSat,
					m: new Date(lastSat)
				});
				console.log("baseDate2",this.baseData)

				// 寻找到距离当前日期最近的周六
				while (lastSat.getDay() != 6) lastSat.setDate(lastSat.getDate() + 1);

				this.$set(this.weeks, 0, this.getWeekDaysByLastSat(lastSat));
				this.$set(this.weeks, 1, this.getWeekDaysByWeeks(this.weeks[0], true));
				this.$set(this.weeks, 2, this.getWeekDaysByWeeks(this.weeks[0], false));
				console.log('weeks2',this.weeks)
				this.current = 0;
			},
			swiperFisnish(e) {
				let current = e.detail.current;
				this.changeWeeks(current > this.baseData.current, current);
				this.$set(this.baseData, 'upCurrIndex', current);
			},
			changeWeeks(direction, current) {
				console.log(current)
				let nextIndex = current + 1 > 2 ? 0 : current + 1;
				let prevIndex = current - 1 < 0 ? 2 : current - 1;
				this.$set(this.weeks, nextIndex, this.getWeekDaysByWeeks(this.weeks[current], true));
				this.$set(this.weeks, prevIndex, this.getWeekDaysByWeeks(this.weeks[current], false));
			},
			// 通过周六数据获取一周的数据
			getWeekDaysByLastSat(lastSat) {
				lastSat = new Date(lastSat);
				let reuslt = [];
				let month = lastSat.getMonth() + 1 < 10 ? "0" + (lastSat.getMonth() + 1) : lastSat.getMonth() + 1
				for (var i = 0; i < 7; i++) {
					reuslt.push({
						d: lastSat.getDate(),
						ym: `${lastSat.getFullYear()}-${month}-${lastSat.getDate()}`,
						timeSpan: +lastSat,
						//m: new Date(lastSat)
						m: this.baseData.selectedDate.m
					});

					lastSat.setDate(lastSat.getDate() - 1)
				}

				return reuslt.reverse();
			},
			// 通过一周的数据获取本周的上周或下周
			getWeekDaysByWeeks(weeks, direction) {
				// 下周
				if (direction) {
					let nextLastSat = new Date(weeks[weeks.length - 1].timeSpan);
					nextLastSat.setDate(nextLastSat.getDate() + 7);
					return this.getWeekDaysByLastSat(nextLastSat)
				}
				// 上周
				else {
					let prevLstSat = new Date(weeks[0].timeSpan);
					prevLstSat.setDate(prevLstSat.getDate() - 1);
					return this.getWeekDaysByLastSat(prevLstSat)
				}
			},
			// 修改当前选中
			changeSelected(item) {
				console.log('item::', item);
				if (this.baseData.selectedDate.timeSpan != item.timeSpan) {
					this.$set(this.baseData, 'selectedDate', {
						...item,
						m: new Date(item.timeSpan)
					});

					this.$emit('changeDate', this.baseData.selectedDate);
				}
				console.log("baseDate3",this.baseData)
				
			}
		},
		computed: {
			nowSelectDateString() {
				let ym = this.baseData.selectedDate.ym
				console.log('ym',ym)
				return ym
				// let m = this.baseData.selectedDate.m;
				// console.log('m',m)
				// return m ? `${m.getFullYear()}年${m.getMonth() + 1 }月${m.getDate()}日` : '';
			}
		},
		watch: {
			defaultDate: {
				handler(newVal, oldVal) {
					this.propDate = this.defaultDate == 0 ? new Date() : new Date(this.defaultDate);
					this.initData();
				},
				immediate: true
			}
		},
	}
</script>

<style lang="scss" scoped>
	view {
		line-height: 1.8;
	}

	.calendar-button {
		flex: 1;
		font-weight: bold;
		font-size: 32rpx;
	}

	.cal {
		width: 100%;
		height: 254rpx;
		background: #004343;
		margin: 0 auto;
		overflow: hidden;
		position: fixed;
		padding-bottom: 40rpx;
		z-index: 999;
	}

	.cal-top {
		width: 100%;
		height: 91rpx;
		background: #004343;
		border-radius: 30rpx 30rpx 0rpx 0rpx;
		line-height: 91rpx;
		text-align: center;

		text {
			font-size: 34rpx;
			font-family: PingFang SC, PingFang SC-Bold;
			font-weight: 700;
			color: #ffffff;
		}
	}

	.cal-content {
		padding: 0 0 40rpx;
		line-height: 1 !important;
	}

	.cal-swiper {
		margin-top: 20rpx;
	}

	.cal-ul {
		position: relative;
		display: flex;
		justify-content: space-between;

		.cal-li {
			width: calc(100% / 7);
			text-align: center;
			margin-top: 10rpx;
			font-size: 24rpx;
		}
	}

	.cal-weeks {
		font-size: 28rpx;
		font-weight: 700;
		color: #00696a;
	}

	.cal-days {
		font-size: 30rpx;
		color: #333;
	}

	.cal-day-li {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 63rpx;
		height: 63rpx;
		margin: 0 auto;
		color: #FFFFFF;
		font-size: 24rpx;
	}

	.cal-day-li-selected {
		background-color: #0060C9;
		margin-top: -8rpx;
		height: 76rpx;
		width: 60rpx;
		border-radius: 30rpx;
		color: #fff !important;
	}
</style>
