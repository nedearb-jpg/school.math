document.addEventListener('DOMContentLoaded', () => {
  const appsList = [
    {
      name: 'Amazon',
      link: 'https://amazon.com/',
      image: '/assets/media/icons/apps/amazon.png',
      categories: ['all', 'media'],
    },
    {
      name: 'BuzzFeed Quizzes',
      link: 'https://buzzfeed.com/quizzes',
      image: '/assets/media/icons/apps/buzzfeed.png',
      categories: ['all', 'media'],
    },
    {
      name: 'Android',
      link: 'https://now.gg/iframe/snippet?app_pkg=com.uncube.launcher3&partner=interstellar',
      image: '/assets/media/icons/android.jpg',
      categories: ['all', 'emu', 'android'],
      now: true,
    },
    {
      name: 'Temu',
      link: 'https://temu.com',
      image: '/assets/media/icons/temu.webp',
      categories: ['all'],
    },
    {
      name: 'Character AI',
      link: 'https://now.gg/iframe/snippet?app_pkg=ai.character.app&partner=interstellar',
      image: '/assets/media/icons/characterai.jpg',
      categories: ['all', 'emu', 'android'],
      now: true,
    },
    {
      name: 'Aptoide',
      link: 'https://now.gg/iframe/snippet?app_pkg=com.aptoide.partners.nowgg.store&partner=interstellar',
      image: '/assets/media/icons/aptoide.jpg',
      categories: ['all', 'emu', 'android'],
      now: true,
    },
    {
      name: 'Movie Web',
      link: 'https://movie-web.app',
      image: 'https://movie-web.app/apple-touch-icon.png',
      categories: ['all', 'media', 'stream'],
    },
    {
      name: 'Scratch',
      link: 'https://scratch.mit.edu',
      image: '/assets/media/icons/scratch.jpg',
      categories: ['all', 'social', 'game', 'media'],
    },
    {
      name: 'Chess.com',
      link: 'https://chess.com',
      image: '/assets/media/icons/chess.png',
      categories: ['all', 'game'],
    },
    {
      name: 'Cool Math Games',
      link: 'https://coolmathgames.com',
      image: '/assets/media/icons/apps/coolmath.png',
      categories: ['all', 'game'],
    },
    {
      name: 'Discord',
      link: 'https://canary.discord.com',
      image: '/assets/media/icons/apps/discord.jpg',
      categories: ['all', 'social'],
    },
    {
      name: 'DuckDuckGo',
      link: 'https://start.duckduckgo.com/',
      image: '/assets/media/icons/apps/duckduckgo.png',
      categories: ['all'],
    },
    {
      name: 'ESPN',
      link: 'https://www.espn.com/watch/',
      image: '/assets/media/icons/apps/espn.webp',
      categories: ['all', 'media'],
    },
    {
      name: 'Fifa Rosters',
      link: 'https://fifarosters.com/',
      image: '/assets/media/icons/fifa.png',
      categories: ['all', 'media'],
    },
    {
      name: 'Firefox Web Browser',
      link: 'https://replit.com/@cooleddie001/Firefox-Legacy?v=1',
      image: '/assets/media/icons/apps/firefox.png',
      categories: ['all', 'media'],
    },
    {
      name: 'Flix HQ',
      link: 'https://flixhq.to',
      image: '/assets/media/icons/apps/flixhq.png',
      categories: ['all', 'media'],
    },
    {
      name: 'Geforce NOW',
      link: 'https://play.geforcenow.com',
      image: '/assets/media/icons/apps/geforce-now.png',
      categories: ['all', 'stream', 'cloud'],
    },
    {
      name: 'Github',
      link: 'https://github.com',
      image: '/assets/media/icons/apps/github.png',
      categories: ['all', 'media'],
    },
    {
      name: 'Google',
      link: 'https://google.com',
      image: '/assets/media/icons/apps/google.png',
      categories: ['all', 'media'],
    },
    {
      name: 'HBO MAX',
      link: 'https://www.hbomax.com/',
      image: '/assets/media/icons/apps/hbo.webp',
      categories: ['all', 'stream'],
    },
    {
      name: 'Messenger',
      link: 'https://messenger.com/',
      image: '/assets/media/icons/apps/messenger.png',
      categories: ['all', 'social', 'message'],
    },
    {
      name: 'Paramount Plus',
      link: 'https://paramountplus.com',
      image: '/assets/media/icons/apps/paramount.png',
      categories: ['all', 'stream'],
    },
    {
      name: 'Pinterest',
      link: 'https://pinterest.com',
      image: '/assets/media/icons/apps/pinterest.png',
      categories: ['all', 'media'],
    },
    {
      name: 'Pixlr',
      link: 'https://pixlr.com/',
      image: '/assets/media/icons/pix.png',
      categories: ['all', 'media'],
    },
    {
      name: 'Poki',
      link: 'https://poki.com',
      image: '/assets/media/icons/apps/poki.png',
      categories: ['all', 'game'],
    },
    {
      name: 'Soundcloud',
      link: 'https://soundcloud.com',
      image: '/assets/media/icons/apps/soundcloud.jpg',
      categories: ['all', 'media'],
    },
    {
      name: 'Spotify',
      link: 'https://open.spotify.com',
      image: '/assets/media/icons/apps/spotify.png',
      categories: ['all', 'media'],
      say: 'Spotify is currently not working on the proxy.',
      error: true,
    },
    {
      name: 'Telegram',
      link: 'https://web.telegram.org/',
      image: '/assets/media/icons/apps/telegram.png',
      categories: ['all', 'social'],
    },
    {
      name: 'Tiktok',
      link: 'https://tiktok.com',
      image: '/assets/media/icons/apps/tiktok.png',
      categories: ['all', 'social', 'media'],
    },
    {
      name: 'Tumblr',
      link: 'https://tumblr.com/',
      image: '/assets/media/icons/apps/tumblr.png',
      categories: ['all', 'social'],
    },
    {
      name: 'Twitch',
      link: 'https://twitch.tv',
      image: '/assets/media/icons/apps/twitch-tv.png',
      categories: ['all', 'stream', 'media'],
    },
    {
      name: 'Twitter',
      link: 'https://twitter.com',
      image: '/assets/media/icons/apps/twitter.png',
      categories: ['all', 'social', 'media'],
    },
    {
      name: 'VS Code',
      link: 'https://vscode.dev',
      image: '/assets/media/icons/apps/vscode.png',
      categories: ['all', 'tool'],
    },
    {
      name: 'Y8 Games',
      link: 'https://y8.com/',
      image: '/assets/media/icons/apps/y8.png',
      categories: ['all', 'game'],
    },
    {
      name: 'YouTube',
      link: 'https://youtube.com',
      image: '/assets/media/icons/apps/yt.png',
      categories: ['all', 'social', 'stream', 'media'],
    },
    {
      name: 'Whatsapp',
      link: 'https://web.whatsapp.com/',
      image: '/assets/media/icons/apps/whatsapp.png',
      categories: ['all', 'message', 'social'],
    },
    {
      name: 'Wattpad',
      link: 'https://wattpad.com/',
      image: '/assets/media/icons/apps/wattpad.webp',
      categories: ['all', 'social'],
    },
    {
      name: 'ChatGPT Clone',
      link: 'https://chat.shuttleai.app/',
      image: '/assets/media/icons/chatgpt.png',
      categories: ['all', 'AI'],
    },
    {
      name: 'Discord - Login',
      link: 'https://canary.discord.com/login',
      image: '/assets/media/icons/discord.jpg',
      categories: ['all', 'social'],
      blank: 'true',
    },
    {
      name: 'HD Today',
      link: 'https://hdtoday.tv',
      image: '/assets/media/icons/hd.png',
      categories: ['all', 'media', 'stream'],
    },
    {
      name: 'Now.GG',
      link: 'https://now.gg',
      image: '/assets/media/icons/now-gg.png',
      categories: ['all', 'emu', 'android'],
    },
    {
      name: 'Now.GG (NowGG.nl)',
      link: 'https://nowgg.nl',
      image: '/assets/media/icons/astroid.png',
      categories: ['all', 'emu', 'android'],
    },
    {
      name: 'Now.GG (NowGG.me) [Working]',
      link: 'https://nowgg.me',
      image: '/assets/media/icons/shuttle.png',
      categories: ['all', 'emu', 'android'],
    },
    {
      name: 'Amazon Luna',
      link: 'https://luna.amazon.com/',
      image: '/assets/media/icons/amazon-luna.png',
      categories: ['all', 'game', 'cloud'],
      blank: 'true',
    },
    {
      name: 'Mathway',
      link: 'https://mathway.com/',
      image: '/assets/media/icons/fixed-removebg-preview.png',
      categories: ['all', 'game', 'cloud'],
    },
  ]

  appsList.sort((a, b) => a.name.localeCompare(b.name))

  const nonPinnedApps = document.querySelector('.container-apps')
  const pinnedApps = document.querySelector('.pinned-apps')

  var pinList = localStorage.getItem('pinnedGames')
  try {
    pinList = pinList.split(',').map(Number)
  } catch {}
  var appInd = 0
  appsList.forEach((app) => {
    let pinNum = appInd
    const columnDiv = document.createElement('div')
    columnDiv.classList.add('column')
    columnDiv.setAttribute('data-category', app.categories.join(' '))

    const pinIcon = document.createElement('i')
    pinIcon.classList.add('fa')
    pinIcon.classList.add('fa-map-pin')
    pinIcon.ariaHidden = true

    const btn = document.createElement('button')
    btn.appendChild(pinIcon)
    btn.style.float = 'right'
    btn.style.backgroundColor = 'rgb(45,45,45)'
    btn.style.borderRadius = '50%'
    btn.style.borderColor = 'transparent'
    btn.style.color = 'white'
    btn.style.top = '-200px'
    btn.style.position = 'relative'
    btn.onclick = function () {
      setPin(pinNum)
    }
    btn.title = 'Pin'

    const link = document.createElement('a')

    if (app.local) {
      link.onclick = function () {
        if (typeof app.say !== 'undefined') {
          alert(app.say)
        }
        window.location.href = app.link
        return false
      }
    } else if (app.blank) {
      link.onclick = function () {
        if (typeof app.say !== 'undefined') {
          alert(app.say)
        }
        blank(app.link)
        return false
      }
    } else if (app.now) {
      link.onclick = function () {
        if (typeof app.say !== 'undefined') {
          alert(app.say)
        }
        now(app.link)
        return false
      }
    } else {
      link.onclick = function () {
        if (typeof app.say !== 'undefined') {
          alert(app.say)
        }
        go(app.link)
        return false
      }
    }

    const image = document.createElement('img')
    image.width = 145
    image.height = 145
    image.src = app.image
    image.loading = 'lazy'

    const paragraph = document.createElement('p')
    paragraph.textContent = app.name
    if (app.error) {
      paragraph.style.color = 'red'
    }

    link.appendChild(image)
    link.appendChild(paragraph)
    columnDiv.appendChild(link)
    if (appInd != 0) {
      columnDiv.appendChild(btn)
    }

    if (pinList != null && appInd != 0) {
      if (pinContains(appInd, pinList)) {
        pinnedApps.appendChild(columnDiv)
      } else {
        nonPinnedApps.appendChild(columnDiv)
      }
    } else {
      nonPinnedApps.appendChild(columnDiv)
    }
    appInd++
  })
  console.log('appsContainer:', appsContainer)
  console.log('pinnedApps:', pinnedApps)
  console.log('nonPinnedApps:', nonPinnedApps)

  appsContainer.appendChild(pinnedApps)
  appsContainer.appendChild(nonPinnedApps)
})
function setPin(index) {
  pins = localStorage.getItem('pinnedGames')
  if (pins == null) {
    pins = []
  }
  if (pins == '') {
    pins = []
  } else {
    pins = pins.split(',').map(Number)
  }
  if (pinContains(index, pins)) {
    let remove = pins.indexOf(index)

    pins.splice(remove, 1)
  } else {
    pins.push(index)
  }
  localStorage.setItem('pinnedGames', pins)
  location.reload()
}
function pinContains(i, p) {
  if (p == '') {
    return false
  }
  for (var x = 0; x < p.length; x++) {
    if (p[x] === i) {
      return true
    }
  }
  return false
}

function show_category() {
  var selectedCategories = Array.from(document.querySelectorAll('#category option:checked')).map(
    (option) => option.value
  )
  var games = document.getElementsByClassName('column')

  for (var i = 0; i < games.length; i++) {
    var game = games[i]
    var categories = game.getAttribute('data-category').split(' ')

    if (selectedCategories.length === 0 || selectedCategories.some((category) => categories.includes(category))) {
      game.style.display = 'block'
    } else {
      game.style.display = 'none'
    }
  }
}

function search_bar() {
  var input = document.getElementById('searchbarbottom')
  var filter = input.value.toLowerCase()
  var games = document.getElementsByClassName('column')

  for (var i = 0; i < games.length; i++) {
    var game = games[i]
    var name = game.getElementsByTagName('p')[0].textContent.toLowerCase()

    if (name.includes(filter)) {
      game.style.display = 'block'
    } else {
      game.style.display = 'none'
    }
  }
}
