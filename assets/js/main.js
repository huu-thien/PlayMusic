
const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const Player_Store_Key = "Store"

const player = $(".player")
const cd = $(".cd")
const heading = $("header marquee")
const cdThumb = $(".cd-thumb")
const audio = $("#audio")
const playBtn = $(".btn-toggle-play")
const progress = $("#progress")
const prevBtn = $(".btn-prev")
const nextBtn = $(".btn-next")
const randomBtn = $(".btn-random")
const repeatBtn = $(".btn-repeat")
const playlist = $(".playlist")
const option = $(".option")
const progressduration = $(".progress__duration")
const progresscurrent = $(".progress__current")
audio.volume = 1;

const app = {
  currentIndex: 0,
  isPlaying: false,
  isRandom: false,
  isRepeat: false,
  config: {},
  // (1/2) line below to use localStorage
  // config: JSON.parse(localStorage.getItem(Play_Store_Key)) || {} ,
  setConfig: function (key, value) {
    this.config[key] = value
    // (2/2) Uncomment the line below to use localStorage
    // localStorage.setItem(PlAYER_STORAGE_KEY, JSON.stringify(this.config));
  },
  songs: [
    {
      name: '3107-1',
      singer: 'W/n , Duongg, Nâu',
      path: './assets/music/3107-1.mp3',
      image: './assets/img/3107-1.jpg',
    },
    {
      name: '3107-2',
      singer: '3107-2 | DuongG x NÂU x W/N ',
      path: './assets/music/3107-2.mp3',
      image: './assets/img/3107-2.jpg',
    },
    {
      name: '3107-3',
      singer: '3107 3 - W/n ft. ( Nâu,Duongg,Titie )',
      path: './assets/music/3107-3.mp3',
      image: './assets/img/3107-3.jpg',
    },
    {
      name: 'Cho Mình Em - Binz ft. Đen Vâu',
      singer: 'Binz ft. Đen Vâu',
      path: './assets/music/chominhem.mp3',
      image: './assets/img/chominhem.jpg',
    },
    {
      name: 'Lần cuối - Ngọt',
      singer: 'Ngọt',
      path: './assets/music/lancuoi.mp3',
      image: './assets/img/lancuoi.jpg',
    },
    {
      name: '2T - LIỆU GIỜ ',
      singer: '2T ( WHAT IF ? ) x Venn ( Prod. KayT ) ',
      path: './assets/music/lieugio.mp3',
      image: './assets/img/lieugio.jpg',
    },
    {
      name: 'Lạ lùng - Vũ',
      singer: 'Vũ',
      path: './assets/music/lalung.mp3',
      image: './assets/img/lalung.jpg',
    },
    {
      name: 'Bước qua mùa cô đơn - Vũ',
      singer: 'Vũ',
      path: './assets/music/buocquamuacodon.mp3',
      image: './assets/img/buocquamuacodon.jpg',
    },
    {
      name: 'Bâng Khuâng - Crying Over You (Mashup/Acoustic Cover)',
      singer: '(Mashup/Acoustic Cover)',
      path: './assets/music/bangkhuang.mp3',
      image: './assets/img/bangkhuang.jpg',
    },
    {
      name: 'SOFAR',
      singer: 'Binz',
      path: './assets/music/SOFAR-Binz.mp3',
      image: './assets/img/sofar.jpg',
    },
    {
      name: 'Nàng thơ - Hoàng Dũng x Freak D',
      singer: 'Hoàng Dũng x Freak D',
      path: './assets/music/nangtho.mp3',
      image: './assets/img/nangtho.jpg',
    },
    {
      name: 'Già Cùng Nhau Là Được',
      singer: 'TeA ft. PC ( Prod. VoVanDuc)',
      path: './assets/music/giacungnhauladuoc.mp3',
      image: './assets/img/giacungnhauladuoc.jpg',
    },
    {
      name: 'Apologize - Timbaland ft. OneRepublic',
      singer: 'Timbaland ft. OneRepublic',
      path: './assets/music/Apologize.mp3',
      image: './assets/img/apologize.jpg',
    },
    {
      name: 'No Thing On You',
      singer: ' Barry Brizzy',
      path: './assets/music/nothingonyou.mp3',
      image: './assets/img/nothingonyou.jpg',
    },
    {
      name: 'Woman (Visualizer)',
      singer: 'Troye Sivan',
      path: './assets/music/angelbaby.mp3',
      image: './assets/img/angelbaby.jpg',
    },
    {
      name: 'Angel Baby (Visualiser)',
      singer: ' Doja Cat',
      path: './assets/music/woman.mp3',
      image: './assets/img/woman.jpg',
    },
    {
      name: 'Muốn Gặp Em - 八三夭 831',
      singer: ' 《想見你想見你想見你 Miss You 3000》',
      path: './assets/music/muongapem.mp3',
      image: './assets/img/muongapem.jpg',
    },
    {
      name: 'LeMon Tree',
      singer: 'Gustixa',
      path: './assets/music/lemontree.mp3',
      image: './assets/img/lemontree.jpg',
    },
    {
      name: 'Let Me Down Slowly',
      singer: 'Alec BenjaMin',
      path: './assets/music/letmedownslowly.mp3',
      image: './assets/img/letmedownslowly.jpg',
    },
    {
      name: 'Reality',
      singer: 'Lost Frequencies',
      path: './assets/music/Reality.mp3',
      image: './assets/img/reality.jpg',
    },

    // {
    //   name: '',
    //   singer: '',
    //   path: './',
    //   image: './',
    // },

  ],
  render: function () {
    const htmls = this.songs.map((song, index) => {
      return `
              <div class="song ${index === this.currentIndex ? "active" : ""}" data-index="${index}">
                  <div class="thumb"
                      style="background-image: url('${song.image}')">
                  </div>
                  <div class="body">
                      <h3 class="title">${song.name}</h3>
                      <p class="author">${song.singer}</p>
                  </div>
                  <div class="option" style="display:none">
                      <i class="fas fa-ellipsis-h"></i>
                      <ul class="option-list">
                        <li class="option-item">
                          yêu thích
                        </li>
                        <li class="option-item">
                          Chia Sẻ
                        </li>
                        <li class="option-item">
                          Lời bài hát
                        </li>
                      </ul>
                  </div>
              </div>
          `;
    })
    playlist.innerHTML = htmls.join("")
  },
  defineProperties: function () {
    Object.defineProperty(this, "currentSong", {
      get: function () {
        return this.songs[this.currentIndex]
      }
    })
  },
  handleEvents: function () {
    const _this = this
    const cdWidth = cd.offsetWidth
    //xử lý CD quay
    const cdThumAnimate = cdThumb.animate([{ transform: "rotate(360deg)" }], {
      duration: 10000,
      iterations: Infinity
    })
    cdThumAnimate.pause()
    //xử lý phóng to / thu nhỏ  CD
    document.onscroll = function () {
      const scrollTop = window.scrollY || document.documentElement.scrollTop
      const newCdWidth = cdWidth - scrollTop

      cd.style.width = newCdWidth > 0 ? newCdWidth + "px" : 0
      cd.style.opacity = newCdWidth / cdWidth
    }
    //xử lý khi click play
    playBtn.onclick = function () {
      if (_this.isPlaying) {
        audio.pause()
      } else {
        audio.play()
      }
    }
    //xử lý khi bài hát được play
    audio.onplay = function () {
      _this.isPlaying = true
      player.classList.add("playing")
      cdThumAnimate.play()
    }
    //xử lý khi bài hát bị pause
    audio.onpause = function () {
      _this.isPlaying = false
      player.classList.remove("playing")
      cdThumAnimate.pause()
    }

    // Khi tiến độ bài hát thay đổi
    audio.ontimeupdate = function () {
      if (audio.duration) {
        const progressPercent = Math.floor((audio.currentTime / audio.duration) * 100);
        progress.value = progressPercent;
      }
      _this.timeCurrent()
      _this.timeDuration()
    }

    // Xử lý khi tua song
    progress.oninput = function (e) {
      const seekTime = (audio.duration / 100) * e.target.value;
      audio.currentTime = seekTime;
    };
    //xử lý khi next bài hát
    nextBtn.onclick = function () {
      if (_this.isRandom) {
        _this.playRandomSong()
      } else {
        _this.nextSong()
      }
      audio.play()
      _this.render()
      _this.scrollToActiveSong()
    }
    //xử lý khi prev bài hát
    prevBtn.onclick = function () {
      if (_this.isRandom) {
        _this.playRandomSong()
      } else {
        _this.prevSong()
      }
      audio.play()
      _this.render();
      _this.scrollToActiveSong()
    }
    //xử lý khi bật/tắt random bài hát
    randomBtn.onclick = function () {
      _this.isRandom = !_this.isRandom
      _this.setConfig("isRandom", _this.isRandom)
      randomBtn.classList.toggle("active", _this.isRandom)
    }
    //xử lý khi lặp lại một bài hát
    repeatBtn.onclick = function () {
      _this.isRepeat = !_this.isRepeat
      _this.setConfig("isRepeat", _this.isRepeat)
      repeatBtn.classList.toggle("active", _this.isReapt)
    }
    //xử lý next bài hát khi audio ended
    audio.onended = function () {
      if (_this.isRepeat) {
        audio.play()
      } else {
        nextBtn.click()
      }
    }
    // lắng nghe hành vi click vào playlist
    playlist.onclick = function (e) {
      const songNode = e.target.closest(".song:not(.active)")

      if (songNode || e.target.closest(".option")) {
        //xử lý khi click vào bài hát
        if (songNode) {
          _this.currentIndex = Number(songNode.dataset.index)
          _this.loadCurrentSong()
          _this.render();
          audio.play()
        }
        //xử lý khi click vào option bài hát
        if (e.target.closest(".option")) {
          //chưa code
          document.querySelector(".option").addEventListener("click", function () {
            document.querySelector(".option").style.display = "block"
          })
        }
      }
    }
  },
  scrollToActiveSong: function () {
    setTimeout(() => {
      if (this.currentIndex <= 2) {
        $('.song.active').scrollIntoView({
          behavior: 'smooth',
          block: 'end',
        });
      } else {
        $('.song.active').scrollIntoView({
          behavior: 'smooth',
          block: 'center',
        });
      }
    }, 300)
  },
  loadCurrentSong: function () {
    heading.textContent = this.currentSong.name
    cdThumb.style.backgroundImage = `url('${this.currentSong.image}')`
    audio.src = this.currentSong.path
  },
  loadConfig: function () {
    this.isRandom = this.config.isRandom
    this.isReapet = this.config.isRepeat
  },
  nextSong: function () {
    this.currentIndex++
    if (this.currentIndex >= this.songs.length) {
      this.currentIndex = 0
    }
    this.loadCurrentSong()
  },
  prevSong: function () {
    this.currentIndex--
    if (this.currentIndex < 0) {
      this.currentIndex = this.songs.length - 1
    }
    this.loadCurrentSong()
  },
  playRandomSong: function () {
    let newIndex
    do {
      newIndex = Math.floor(Math.random() * this.songs.length)
    }
    while (newIndex === this.currentIndex)
    this.currentIndex = newIndex
    this.loadCurrentSong()
  },
  formatTime: function (sec_num) {
    let hours = Math.floor(sec_num / 3600);
    let minutes = Math.floor((sec_num - hours * 3600) / 60);
    let seconds = Math.floor(sec_num - hours * 3600 - minutes * 60);

    hours = hours < 10 ? (hours > 0 ? '0' + hours : 0) : hours;

    if (minutes < 10) {
      minutes = '0' + minutes;
    }
    if (seconds < 10) {
      seconds = '0' + seconds;
    }
    return (hours !== 0 ? hours + ':' : '') + minutes + ':' + seconds;
  },
  // hiển thị thời gian bài hát hiện tại
  timeCurrent: function () {
    setInterval(() => {
      let cur = this.formatTime(audio.currentTime)
      progresscurrent.textContent = `${cur}`;
    }, 100)
  },
  //hiển thị thời gian bài hát
  timeDuration: function () {
    if (audio.duration) {
      let dur = this.formatTime(audio.duration)
      progressduration.textContent = `${dur}`;
    }
  },
  start: function () {
    //gán cấu hình từ config vào ứng dụng
    this.loadConfig()
    //định nghĩa các thuộc tính cho 
    this.defineProperties()
    //lắng nghe/ xử lý các sự kiệm (DOM events)
    this.handleEvents()
    //tải thông tin bài hát đầu tiên vào UI khi chạy ứng dụng
    this.loadCurrentSong()
    // render playlist
    this.render()
    // hiển thị trạng thái ban đầu của button repeat và random
    // randomBtn.classList.toggle("active", this.isRandom)
    // repeatBtn.classList.toggle("active", this.isRepeat)
  },
}

app.start();

// lặp bài 
// random bài 
// nút mũi tên -> tua tới hoặc lùi 5s
// animation
// khi hết bài có tự động chuyển khum
// cái ảnh bài có quay không 
// lướt lên xuống có thu phần header lại ko 