<template>
    <base-article>
        <h2>
            Memulai Javascript Part 1
        </h2>
        <p class="text-mute">20 November 2017</p>
        <p>
            Sebelum memulai untuk belajar framework javascript (misal React, Angular, Ember, Vue dll), Ada
            baiknya
            untuk mengenal dasar javascript terlebih dahulu.
        </p>
        <p>
            <common-image caption="Javascript was easy"
                          src="https://3.bp.blogspot.com/-pZmK-YiibeY/Wc86__T8j-I/AAAAAAAABi8/drRQUk0b47UjGt0sZzqDIjL7SPtE6qbowCLcBGAs/s200/wevds.png"/>
        </p>
        <p>
            Javascript merupakan bahasa yang mudah untuk dikuasai, Berbeda dengan C, Java maupun beberapa bahasa
            compiler lainya. Namun berhati hatilah, sebab javascript sering sekali mengalami silent error yang
            akan
            sulit dipahami jika kamu tidak berhati hati.
            Berikut ini beberapa langkah persiapan yang dapat saya berikan.
        </p>
        <p>
            Berikut ini beberapa langkah persiapan yang dapat saya berikan.
        </p>
        <p>
            <strong class="nl-blocked">1. Mempersiapkan Compiler</strong>
            Untuk memulai belajar bahasa pemrgoraman diperlukan sebuah compiler. Karena setiap browser sudah
            punya compiler javascript, maka kita akan mencoba mengcompile javascript melalui browser.
            Cara masuknya adalah dengan menekan tombol ctrl+shift+i (untuk browser mozila maupun chrome).
        </p>
        <p>
            <common-image
                    caption="Developer console browser merupakan alat yang sangat powerfull setelah text editor dalam melakukan pengembangan web"
                    src="https://3.bp.blogspot.com/-abd_J-E7-5I/Wc87IwEXr8I/AAAAAAAABjA/kQwwG39nabEJuaxLyWh7GbwaRHC52HjxwCLcBGAs/s640/wsed.PNG"/>
        </p>
        <p>Gambar diatas adalah bagian dari console browser yang dapat kita gunakan untuk mengeksekusi program
            javascript.
        </p>
        <p>Untuk pemanasan kita coba untuk mendefinisikan beberapa variabel di javascript dibawah.</p>
        <p>
            <vue-embed-gist gist-id="28309e8c00d62ee28be0cb29c562a8be"></vue-embed-gist>
            <common-image
                    src="https://3.bp.blogspot.com/-D2hMt4pmY7s/Wc87OdafDoI/AAAAAAAABjE/Dz4X_s8S4oQfNT11beQ4M6QT8ZYJbyTlACLcBGAs/s640/fawf.PNG"
                    caption="Contoh pada browser mozilla, kamu dapat menyalin script yang ada diatas pada inputan di developer console browser"/>
        </p>
        <p>Berbeda dengan bahasa compiler, dalam variabel javascript kita bisa meredeklarasi variabel yang
            semula bertipe integer (bilangan) menjadi bertipe string (kalimat/alfabet). Namun demi menjaga agar
            programu lebih terjaga kualitasnya dan tidak pusing kedepanya, ada baiknya hal ini dihindari.
            Dari gambar diatas kita juga dapat menampilkan nilai dari setiap variabel ke layar dengan
            menggunakan perintah console.log();
            Selain kita dapat mendeklarasikan variabel seperti string & integer. Kita juga bisa mendeklarasikan
            array, object bahkan function sekaligus. Misal</p>
        <p>
            <vue-embed-gist gist-id="9a908a634bfe982076c7f93e64fb0352"></vue-embed-gist>
        </p>
        <p>
            <strong class="nl-blocked">2. Mempersiapkan Text Editor</strong>
            Text editor merupakan alat untuk mempermudah kita untuk menuliskan program. Disini saya
            merekomendasikan Sublime Text. Karena selain ringan applikasi ini dapat membuat kita menjadi sangat
            produktif.
            Setelah kamu menginstal sublime selanjutnya cobakah tekan ctrl+shift+p dan pilih install package
            untuk menginstal package yang dapat mempermudah kerja kita.
            beberapa plugin yang saya rekomendasikan antara lain. Emmet, HTML beautify & Javascript Beautify.
            Untuk selanjutnya kamu bisa coba instal beberapa plugin lain untuk mempermudah kerja mu.
            Namun jika kamu mau beberapa alternatif editor lain maka kamu dapat mencoba seperti Vscode,
            brackets, atom, webstorm. Atau jika itu memang kurang menantang kamu bisa belajar vim atau bahkan
            pakai nano / pico hehehe.
        </p>
        <p>Oke cukup sekian, Insya Alloh ada kelanjutanya. Terimakasih :)</p>
    </base-article>
</template>

<script>
    export default {
        metaInfo: {
            title: 'Cahyo Wibowo - Memulai javascript part 1',
            meta: [
                {
                    'property': 'og:title',
                    'template': chunk => `${chunk}`,
                    'content': 'Memulai javascript part 1',
                    'vmid': 'og:title'
                },
                {
                    'property': 'description',
                    'template': chunk => `${chunk}`,
                    'content': 'Memulai javascript part 1 dengan browser dan code editor'
                },
                {
                    'property': 'og:image',
                    'template': chunk => `${chunk}`,
                    'content': 'https://3.bp.blogspot.com/-pZmK-YiibeY/Wc86__T8j-I/AAAAAAAABi8/' +
                        'drRQUk0b47UjGt0sZzqDIjL7SPtE6qbowCLcBGAs/s200/wevds.png'
                }
            ]
        }
    }
</script>