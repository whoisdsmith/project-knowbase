---
# This is an example of how to use widgets, to display live data
# Dashboard is for moniroting crypto prices, news and other stats
# Screenshot of the running project: https://ibb.co/album/ynSwzm

pageInfo:
  title: Crypto Dash
  description:
  navLinks:
  - title: Portfolio
    path: https://www.livecoinwatch.com/portfolio
  - title: Node Management
    path: https://btc-node1.local

appConfig:
  theme: colorful
  fontAwesomeKey: c94dc2b452
  hideComponents:
    hideSearch: true
    hideSettings: true
    hideSplashScreen: true

sections:
- name: Token Prices
  icon: fab fa-btc
  displayData:
    rows: 2
  widgets:
  - type: crypto-watch-list
    options:
      limit: 15

- name: Price History
  icon: fad fa-chart-line
  displayData:
    rows: 2
    cols: 2
  widgets:
  - type: crypto-price-chart
    options:
      asset: bitcoin
      currency: USD
      numDays: 7
      chartColor: '#f7931a'
  - type: crypto-price-chart
    options:
      asset: ethereum
      currency: USD
      numDays: 7
      chartColor: '#b8c1dd'
  - type: crypto-price-chart
    options:
      asset: polkadot
      currency: USD
      numDays: 7
      chartColor: '#da3159'

- name: Crypto News
  icon: fad fa-newspaper
  displayData:
    rows: 2
  widgets:
  - type: rss-feed
    options:
      rssUrl: https://cointelegraph.com/editors_pick_rss
      apiKey: wbri5yesepy3m0ov2fjthlvsteqwtquubb48qfqf

- name: Live Transactions
  icon: fad fa-poll
  displayData:
    cols: 2
    rows: 2
  widgets:
  - type: iframe
    options:
      url: http://bitcoinrain.io/
      frameHeight: 400

- name: Block Explorers
  icon: fad fa-cubes
  displayData:
    cols: 2
  items:
  - title: Bitcoin
    description: BTC Transactions
    icon: si-bitcoin
    url: https://live.blockcypher.com/btc/
    provider: BlockCypher
    target: newtab
    color: '#F7931A'
  - title: Ethereum
    description: ETH Transactions
    icon: si-ethereum
    url: https://www.etherchain.org/
    provider: EtherChain
    target: newtab
    color: '#497493'
  - title: Cardano
    description: ADA Transactions
    icon: favicon
    url: https://explorer.cardano.org/
    provider: Cardano
    target: newtab
  - title: Binance Chain
    description: Binance Smart Chain Transactions
    icon: si-binance
    url: https://www.bscscan.com/
    provider: BSC Scan
    target: newtab
    color: '#F0B90B'
  - title: Solana
    description: SOL Block Explorer
    icon: favicon
    url: https://explorer.solana.com/
    provider: Solana.com
    target: newtab
  - title: Polkadot
    description: DOT Block Explorer
    icon: si-polkadot
    url: https://polkadot.subscan.io/
    provider: SubScan
    target: newtab
    color: '#E6007A'
  # - title: Terra
  #   description: LUNA Block Explorer
  #   icon: favicon
  #   url: https://www.stake.id
  #   provider: Stake ID
  #   target: newtab
  # - title: Avalanche
  #   description: AVAX Block Explorer
  #   icon: favicon
  #   url: https://explorer.avax.network/
  #   provider: AVAX.network
  #   target: newtab
  - title: Doge
    description: Doge Coin Block Explorer
    icon: si-dogecoin
    url: https://dogeblocks.com/
    provider: DogeBlocks.com
    target: newtab
    color: '#C2A633'
  - title: Monero
    description: XMR Block Explorer
    icon: si-monero
    url: https://www.exploremonero.com/
    provider: ExploreMonero.com
    target: newtab
    color: '#FF6600'

- name: UTXO Chart
  icon: fad fa-chart-scatter
  displayData:
    cols: 2
    rows: 2
  widgets:
  - type: embed
    options:
      html: <img class="utxo-chart" src="https://utxo.live/hist_utxo_dark.png" />
      css: '.utxo-chart { width: 100%}'

- name: Exchange Rates
  icon: fad fa-pound-sign
  widgets:
  - type: exchange-rates
    options:
      apiKey: 00fee8a2d9492a7f2ad5f1b9
      inputCurrency: USD
      outputCurrencies:
        - GBP
        - EUR
        - JPY
        - HKD
        - AUD
        - CAD
        - CHF
        - INR

- name: International Time
  icon: fad fa-clock
  widgets:
  - type: clock
    options:
      timeZone: Europe/London
      format: en-GB
  - type: clock
    options:
      timeZone: America/New_York
      format: en-GB
  - type: clock
    options:
      timeZone: Asia/Hong_Kong
      format: en-GB
