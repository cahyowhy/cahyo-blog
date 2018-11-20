<template>
    <base-article>
        <h2>
            Macam Method Array Javascript Dan Penggunaanya
        </h2>
        <p class="text-mute">20 November 2017</p>
        <p>
            Pada Javascript, memanipulasi Array sebenarnya tidaklah terlalu sulit jika kita tahu cara efektifnya.
        </p>
        <p>
            <common-image caption="cara tradisional memanipulasi / menampilkan item dari array"
                          src="https://1.bp.blogspot.com/-PQ4NUwqimhk/Wc9B9dFh8PI/AAAAAAAABjU/duosFOQzzSo3kxS9Gqlna0JFtjB3hIJ0wCLcBGAs/s320/dwqfwerg.PNG"/>
        </p>
        <p>
            Pada post kali ini saya akan membuat contoh beberapa kasus yang dapat kita gunakan untuk mengaplikasikan
            beberapa method array pada javasript.
        </p>
        <p>
            <strong class="nl-blocked">1. Menampikan nilai dari variabel Array</strong>
            Disini saya memberi 2 contoh alternatif untuk menampilkan nilai pada index array
        </p>
        <p>
            <vue-embed-gist gist-id="0fa7240b58f6efe6bb2c54a998220055"/>
        </p>
        <p>
            pada method forEach kita bisa mendapatkan 2 variabel callback antara lain item dan index, dimana item ialah
            nilai pada array ke index, sedangkan index iterasi ke- .. yang berupa bilangan.
        </p>
        <p>
            <strong class="nl-blocked">2. Memanipulasi Array object</strong>
            Array tak selamanya berisi hanya integer / string namun dapat pula berbentuk object. Misalnya seperti ini :
        </p>
        <p>
            <vue-embed-gist gist-id="f7c00a699b43033ef8b424acd5232840"/>
        </p>
        <p>
            Nah, misalnya kita ingin menambahkan attribut baru pada setiap objek misalnya gender, kita dapat menggunakan
            Array Map. Contoh :
        </p>
        <p>
            <vue-embed-gist gist-id="d2866771a17bb5262e90d6e18a386e94"/>
        </p>
        <p>
            hasil pada script diatas akan menghasilkan nilai seperti dibawah.
            <vue-embed-gist gist-id="ec649f170eb5c3f035e5abe270ae9540"/>
        </p>
        <p>Dapat dilihat pada script diatas bahwa method map memiliki return yang berupa item sedangkan pada method
            forEach tidak memiliki return / return nya pasti undefined. Jadi jangan sekali kali kamu memberi nilai
            variabel mu seperti ini -> <i>a = array.forEach(function(item){ item.umur = 2; return item; })</i> pasti
            returnya selalu undefined.</p>
        <p>
            <strong class="nl-blocked">3. Memfilter Array</strong>
            Untuk dapat memfilter Array kita dapat menggunakan method filter. Method filter memiliki return sama seperti
            method map, return nya berupa array. <br> Contoh :
        </p>
        <p>
            <vue-embed-gist gist-id="afb075f8bed783d0ea995f367af45c79"/>
        </p>
        <p>Pada script diatas kita mencoba untuk memfilter data pegawai yang umurnya dibawah 21 dan terdapat output
            dengan nama pegawai pawiro.
            Array filter ini juga dapat dipakai untuk mengecek adakah pegawai yang usianya dibawah 20, total pegawai
            yang usianya 20 dll (sesuai kebutuhan anda). <br>Contoh :</p>
        <p>
            <vue-embed-gist gist-id="aecbd80c95601e7edf8ce07c2ffd3bb9"/>
        </p>
        <p>Pada script diatas dapat dipahami bahwa nilai accu bergantung pada parameter terakhir nya (jika '' berarti
            string, 0 berarti integer, {} berarti object dll).
            Oke cukup sekian ya.
        </p>
        <p>
            Bagi kamu yang pingin tau lebih banyak tentang method2 array di javasript kamu dapat mengunjungi <a
                href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array">situs
            ini</a> ,
            karena sebenarnya ada banyak sekali method array yang dapat meringankan kerjaanmu.
        </p>
    </base-article>
</template>

<script>
    export default {
        metaInfo: {
            title: 'Cahyo Wibowo - Macam Method Array Javascript',
            meta: [
                {
                    'property': 'og:title',
                    'template': chunk => `${chunk}`,
                    'content': 'Macam Method Array Javascript',
                    'vmid': 'og:title'
                },
                {
                    'property': 'description',
                    'template': chunk => `${chunk}`,
                    'content': 'Macam Method Array Javascript Untuk mempermudah kita'
                },
                {
                    'property': 'og:image',
                    'template': chunk => `${chunk}`,
                    'content': 'https://1.bp.blogspot.com/-PQ4NUwqimhk/Wc9B9dFh8PI/AAAAAAAABjU/' +
                        'duosFOQzzSo3kxS9Gqlna0JFtjB3hIJ0wCLcBGAs/s320/dwqfwerg.PNG'
                }
            ]
        }
    }
</script>