<template>
    <base-article>
        <h2>
            Meminimalisasi Perubahan Variabel Pada Javascript
        </h2>
        <p class="text-mute">20 November 2017</p>
        <p>
            Javascript merupakan bahasa yang riskan. Berbeda dengan bahasa compiler yang mengcompile seluruh programnya
            sebelum dijalankan, bahasa Intrepreter (javascript, ruby, php dll) mengcompile program sembari menjalankan
            programnya. Bisa dikatakan riskan jika kita tidak berhati hati melakukan penanganan yang sesuai, salah
            satunya adalah dalam menangani variabel.
        </p>
        <p>
            Taruhlah misalnya kamu punya satu data misalnya var a = 21 dan kamu mau mengubahnya menjadi bernilai apapun
            (misal object, array, string dll), mungkin ini tidak menjadi masalah besar.
        </p>
        <p>
            Namun apa yang terjadi jika datanya adalah array (misal dari web service / ajax), tentunya hal ini sangat
            riskan jika kita tidak berhati hati.
        </p>
        <p>
            Dalam hal ini ada satu solusi yang dapat dilakukan yaitu menggunakan variabel berupa const . Setelah kamu
            mendeklarasikan variabel constant maka jangan harap kamu dapat merubahnya lagi.
        </p>
        <p>
            <common-image caption="pesan error setelah mengganti nilai dari variabel angka menjadi 24"
                          src="https://3.bp.blogspot.com/-ZEfDRxPv-9c/Wc9DPSwEpNI/AAAAAAAABjg/x78KXCbvLVw21bti4UmRRdCYNugFubXEgCLcBGAs/s400/dank.PNG"/>
        </p>
        <p>
            Contoh dibawah ini adalah studi kasus yang dapat kita gunakan untuk lebih memanfaatkan const :
        </p>
        <p>
            <vue-embed-gist gist-id="f3a1cfccc9c1187b42f11f798311a212"></vue-embed-gist>
        </p>
        <p>
            Dari script diatas terdapat ternary operator yang dapat kita gunakan untuk membuat program kita lebih
            efisien dan immutable, penjelasanya adalah contoh dibawah ini.
        </p>
        <p>
            Maksud dari script param%2===0 ? "Ya ini bilangan genap" : "Tidak, ini ganjil" , berarti pertama kita cek
            terlebih dahulu apakah param%2===0 (apakah parameter function di modulo 2 hasilnya sebanding dengan 0 ?)
            jika ya maka kembalikan value "Ya ini bilangan genap" jika tidak maka kembalikan value "Tidak, ini ganjil" .
        </p>
        <p>
            Solusi diatas cukup untuk mengganti statement if else yang agak panjang seperti dibawah ini.
        </p>
        <p>
            <vue-embed-gist gist-id="7b4bbaeb1ea80eb6076781b7953e2b4b"></vue-embed-gist>
        </p>
        <p>
            Kita juga dapat mengaplikasikan ternary operator ini pada while statement. <br>
            Contoh :
        </p>
        <p>
            <vue-embed-gist gist-id="d2151595aeb959e7caa31588edcb32cf"></vue-embed-gist>
        </p>
        <p>walaupun agak ribet namun setidaknya kita tidak memutasi variabel namaHarinya2 selama 7 kali dan secara baris
            line pun hanya cuma 4 line tok hehehe.
        </p>
        <p>Oke cukup sekian dan apabila ada salah ejaan dari bahasa inggrisnya mohon dimaklumi soalnya aku wong jowo
            dudu wong londo muehehehe.
            tengkiuh..</p>
    </base-article>
</template>

<script>
    export default {
        metaInfo: {
            title: 'Cahyo Wibowo - Meminimalisasi Perubahan Variabel Pada Javascript',
            meta: [
                {
                    'property': 'og:title',
                    'template': chunk => `${chunk}`,
                    'content': 'Meminimalisasi Perubahan Variabel Pada Javascript',
                    'vmid': 'og:title'
                },
                {
                    'property': 'description',
                    'template': chunk => `${chunk}`,
                    'content': 'Meminimalisasi Perubahan Variabel Pada Javascript dengan ternary ' +
                        'operator pada if dan switch'
                },
                {
                    'property': 'og:image',
                    'template': chunk => `${chunk}`,
                    'content': 'https://3.bp.blogspot.com/-ZEfDRxPv-9c/Wc9DPSwEpNI/AAAAAAAABjg/' +
                        'x78KXCbvLVw21bti4UmRRdCYNugFubXEgCLcBGAs/s400/dank.PNG'
                }
            ]
        }
    }
</script>