<template>
    <base-article>
        <h2>Mengurangi Ukuran Size File Javascript dengan webpack.ContextReplacementPlugin</h2>
        <p class="text-mute">3 Desember 2018</p>
        <p>
            <common-image src="/static/images/webpack-logo.png"
                          caption="Kita dapat mengabaikan beberapa module yang tidak kita inginkan dengan plugin webpack.ContextReplacementPlugin"/>
        </p>
        <p>Bekerja dengan menggunakan berbagai macam module npm tentu akan sangat mempermudah kita dalam menyelesaiakan
            pekerjaan. Namun tentu saja ada Harga yang harus dibayar jika kita terlalu banyak menginstall library npm
            ini. Salah satunya adalah <i>oversize</i> nya bundle yang kita hasilkan</p>
        <p>Salah satu cara untuk mengakali besarnya ukuran bundle ini adalah dengan menggunakan salah satu plugin
            webpack
            yaitu <i>webpack.ContextReplacementPlugin</i>. Secara default plugin ini sebenarnya sudah ada apabila kita
            telah menginstall webpack dengan versi 3 <i>(kebetulan pada contoh ini saya menggunakan webpack versi
                ^3.8.1).</i></p>
        <p>Kegunaan dari plugin ini adalah untuk memilah beberapa submodule yang ingin kita export, Jadi tidak semua
            submodule dalam module akan ter export</p>
        <p><i>Pusing dengan penjelasan diatas ?</i> hehe.., Oke mari kita lihat implementasi dari plugin ini dibawah</p>
        <p>
            <common-image src="/static/images/pict-1.png"
                          caption="Ukuran file vendor.js saat selesai di build"/>
        </p>
        <p>Pada gambar diatas diketahui ukuran file vendor.js ialah sebesar 2.57 mB (927 kB minified) sedangkan untuk
            library momentnya sendiri pada file vendor js menghabiskan sekitar 528 kB (225 kB minified)</p>
        <p>Karena pada project diatas saya hanya menggunakan beberapa file locale dari moment seperti untuk bahasa
            inggris dan indonesia saja, maka kita dapat mengabaikan sisa-sisa file locale yang tidak kita gunakan
            menggunakan plugin webpack.ContextReplacementPlugin seperti pada contoh dibawah</p>
        <p>
            <vue-embed-gist gist-id="f02989cadde0e82fbf02b8963f5f687c"/>
        </p>
        <p>Nah berikut ini hasil dari build terbaru sehabis saya memasang plugin diatas</p>
        <common-image src="/static/images/pict-2.png"
                      caption="Ukuran file vendor.js sekarang menjadi 2.2 mB (753 kB minified)"/>
        <p>Nah cukup sekian bahasan saya tentang webpack.ContextReplacementPlugin. Terimakasi telah membaca :)</p>
    </base-article>
</template>

<script>
    export default {
        metaInfo: {
            title: 'Cahyo Wibowo - Mengurangi Ukuran Size File Javascript dengan webpack.ContextReplacementPlugin',
            meta: [
                {
                    'property': 'og:title',
                    'template': chunk => `${chunk}`,
                    'content': 'Mengurangi Ukuran Size File Javascript dengan webpack.ContextReplacementPlugin',
                    'vmid': 'og:title'
                },
                {
                    'property': 'description',
                    'template': chunk => `${chunk}`,
                    'content': 'Cara Mengurangi Ukuran Size File Javascript dengan webpack.ContextReplacementPlugin'
                },
                {
                    'property': 'og:image',
                    'template': chunk => `${chunk}`,
                    'content': 'https://cahyowhy.github.io/static/images/webpack-logo.png'
                }
            ]
        }
    }
</script>