<template>
    <base-article>
        <h2>
            Compile File C# Dengan Menggunakan Cmd
        </h2>
        <p class="text-mute">20 November 2015</p>
        <p>
            C# adalah bahasa program yang diciptakan oleh microsoft yang merupakan sebuah versi canggih dari c++.
            Umumnya
            bahasa c# lebih unggul dalam bidang OOP (oriented object programming) dari pada versi pendahulunya yaitu
            c++. bahasa c# sendiri mengandung 70% bahasa java, 20% bahasa c++, dan sisanya merupakan bahasa baru.
        </p>
        <p>
            Bagi teman teman yang dulunya memang mahir menggunakan java, maka belajar c# pasti akan sangat mudah,
            karena hampir semua keyword c# mirip dengan java. selain itu sebagian fungsi rumusnya juga sebenarnya mirip
            dengan c++. saya sendiri ketika mau belajar c#, memang agak sulit dengan keywod yang aneh, aneh. Namun
            ketika dibaca lebih lanjut, sebenarnya memang agak mirip dengan c++ namun sifatnya lebih OOP lagi.
        </p>
        <p>
            Nah bagi temen temen yang ingin belajar dasar dasar c# tanpa pusing pusing harus download aplikasi visual
            studio yang menuh menuhin laptop maka penulis rekomendasikan untuk menggunakan cmd sebagai kompiler dan
            notepad sebagai editornya. Nah, lalu bagaimana cara membuat agar cmd dapat mengcompile bahasa c#?...
        </p>
        <p>
            <strong class="nl-blocked">1. Masuk ke explorer</strong>
            lalu masuk ke drive c:, masuk ke folder windows lalu microsoft. net, framework dan masuk ke folder 3.5
            (C:\Windows\Microsoft.NET\Framework\v3.5).
        </p>
        <p>
            <strong class="nl-blocked">2. Pastikan</strong>
            ada file yang bernama csc.exe di folder tsb
        </p>
        <p>
            <strong class="nl-blocked">3. Masuk ke</strong>
            Computer--> Properties--> Advanced system settings--> Environment variables lalu cari Path
        </p>
        <p>
            <strong class="nl-blocked">4. Salin lokasi file csc.exe</strong>
            di path, pastikan pada bagian belakan tanpa menggunakan spasi, contoh--> (bla bla
            bla;C:\Windows\Microsoft.NET\Framework\v3.5)
            <common-image
                    caption="System properties env variable path windows"
                    src="http://2.bp.blogspot.com/-7REkDtCHu7I/VQ9F_u3VPXI/AAAAAAAAAl4/rC2dZabKTsE/s1600/new.JPG"/>
        </p>
        <p>
            <strong class="nl-blocked">5. Tekan ok, </strong>
            lalu restart komputer.
        </p>
        <p>
            <strong class="nl-blocked">6. Pastekan script hello world ini di notepad mu, </strong>
            <vue-embed-gist gist-id="1e136d854bc6dcb314a839ca0792a2e2"/>
        </p>
        <p>
            <strong class="nl-blocked">7. Simpan dengan ekstensi .cs, </strong>
            (miss new2.cs) dalam drive misalnya di drive d: dalam folder cs.
        </p>
        <p>
            <strong class="nl-blocked">8. Masuk CMD, </strong>
            lalu ketik d: untuk masuk ke drive d: lalu ketikan
        <pre>cd cs</pre>
        untuk masuk ke folder cs
        </p>
        <p>
            <strong class="nl-blocked">9. lalu kompile file dengan csc namafile.cs</strong>
        </p>
        <p>
            <strong class="nl-blocked">10. Buka file exe yang sudah di kompile di folder cs tadi</strong>
            <common-image
                    src="http://3.bp.blogspot.com/-qQ2unvuU3kI/VQ9F_Uh9CeI/AAAAAAAAAls/nfKOv979xW8/s1600/new3.JPG"/>
        </p>
    </base-article>
</template>

<script>
    export default {
        metaInfo: {
            title: 'Cahyo Wibowo - Compile File C# Dengan Menggunakan Cmd',
            meta: [
                {
                    'property': 'og:title',
                    'template': chunk => `${chunk}`,
                    'content': 'Compile File C# Dengan Menggunakan Cmd',
                    'vmid': 'og:title'
                },
                {
                    'property': 'description',
                    'template': chunk => `${chunk}`,
                    'content': 'Compile File C# Dengan Menggunakan Cmd'
                },
                {
                    'property': 'og:image',
                    'template': chunk => `${chunk}`,
                    'content': 'http://2.bp.blogspot.com/-7REkDtCHu7I/VQ9F_u3VPXI/AAAAAAAAAl4/rC2dZabKTsE/s1600/new.JPG'
                }
            ]
        }
    }
</script>