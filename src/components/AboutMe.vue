<template>
    <div class="a-item is-sorotan about-me">
        <div>
            <div class="ribbon"></div>
            <div class="inner">
                <h2>Tentang ku</h2>
                <div class="content">
                    <common-image src="/static/images/me.jpg" alt="Tentang saya"/>
                    <p>Hallo saya cahyo wibowo, Web developer dari kota jogja.
                        Berpengalaman bekerja dan membuat website selama > 2 tahun.
                    </p>
                    <p>
                        Keahlian saya meliputi
                        pembuatan website menggunakan teknologi seperti Ember, Vue, Jquery,
                        Html dan Css (Untuk frontend).
                        Untuk backend saya menggunakan Ruby on rails, Php dan golang (Saya biasa dan mau
                        belajar teknologi baru :))
                    </p>
                    <div class="socials-wrp">
                        <p>Hubungi saya di</p>
                        <div class="socials">
                            <div class="social__item">
                                <a target="_blank" href="http://facebook.com/pndawa.jalanan"
                                   class="social__icon--facebook"><i class="fab fa-facebook"></i>
                                </a>
                            </div>
                            <div class="social__item">
                                <a target="_blank" href="http://instagram.com/cahyowhy"
                                   class="social__icon--instagram"><i class="fab fa-instagram"></i>
                                </a>
                            </div>
                            <div class="social__item">
                                <a target="_blank" href="http://github.com/cahyowhy"
                                   class="social__icon--github"><i class="fab fa-github-square"></i>
                                </a>
                            </div>
                            <div class="social__item">
                                <a target="_blank"
                                   href="https://api.whatsapp.com/send?phone=6281239458778&text=Hallo%20Cahyo."
                                   class="social__icon--whatsapp"><i class="fab fa-whatsapp-square"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "AboutMe"
    }
</script>