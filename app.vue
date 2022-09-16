<template>
  <div class="flex justify-center w-full prose-sm">
    <div class="w-full max-w-[250px] lg:max-w-[500px] my-12">

      <div>
        <h1>nuxt3-image-pixel-device-ratio-2x-support</h1>
        <p>
          <a target="_blank" href="https://github.com/hartmut-co-uk/nuxt3-image-pixel-device-ratio-2x-support">https://github.com/hartmut-co-uk/nuxt3-image-pixel-device-ratio-2x-support</a>
        </p>
        <h2>Context</h2>
        <p>
          I'd like to achieve support for browsers with high pixel density of screen.
        </p>
        <p>
          To calculate the pixel density of a screen, browsers make use of the pixel-device-ratio. A pixel-device-ratio of 1 means that one device pixel corresponds to one CSS pixel. A pixel-device-ratio of 2 means that two device pixels corresponds to one CSS pixel.
        </p>
        <p>
          Source: <a target="_blank" href="https://medium.com/@woutervanderzee/responsive-images-with-srcset-and-sizes-fc434845e948">https://medium.com/@woutervanderzee/responsive-images-with-srcset-and-sizes-fc434845e948</a>
        </p>
        <p>
          <strong>Conclusion: I'd like to be able to get option (4) with &lt;nuxt-img&gt;!!!</strong>
        </p>
      </div>

      <div>
        <h2>Page main section setup</h2>
        <p>
          Very basic responsive page, width limited via tailwind with <br>
          <code>class="w-full max-w-[250px] lg:max-w-[500px]"</code>
        </p>
        <p>
          The original image is `/cat.png`, PNG, 1200x630, 994KB.
        </p>
      </div>

      <div>
        <h3>(1) Plain &lt;img&gt; of full size original image</h3>
        <p>Fails lighthouse scan, inefficient full file size, looks sharp on all devices</p>
        <p>
          <code>
            &lt;img
            src=&quot;/cat.png&quot;
            alt=&quot;(1) Plain &lt;img&gt; of full size original image&quot;
            class=&quot;w-full&quot;
            width=&quot;1200&quot;
            height=&quot;630&quot;/&gt;
          </code>
        </p>
        <img
            src="/cat.png"
            alt="(1) Plain &lt;img&gt; of full size original image"
            class="w-full"
            width="1200"
            height="630"/>
      </div>

      <div>
        <h3>(2) &lt;nuxt-img&gt; with sizes defined for 1x size</h3>
        <p>Fine on lighthouse scan and 1x devices, but looks less sharp on retina</p>
        <p>
          <code>
            &lt;nuxt-img
            src=&quot;/cat.png&quot;
            alt=&quot;(2) &lt;nuxt-img&gt; with sizes defined for 1x size&quot;
            class=&quot;w-full&quot;
            width=&quot;1200&quot;
            height=&quot;630&quot;
            sizes=&quot;sm:250px lg:500px&quot;/&gt;
          </code>
        </p>
        <nuxt-img
            src="/cat.png"
            alt="(2) &lt;nuxt-img&gt; with sizes defined for 1x size"
            class="w-full"
            width="1200"
            height="630"
            sizes="sm:250px lg:500px"/>
      </div>

      <div>
        <h3>(3) &lt;nuxt-img&gt; with 2x size</h3>
        <p>Fails lighthouse scan, inefficient for 1x devices, but looks sharp on retina</p>
        <p>
          <code>
            &lt;nuxt-img
            src=&quot;/cat.png&quot;
            alt=&quot;(3) &lt;nuxt-img&gt; with 2x size&quot;
            class=&quot;w-full&quot;
            width=&quot;1200&quot;
            height=&quot;630&quot;
            sizes=&quot;sm:500px lg:1000px&quot;/&gt;
          </code>
        </p>
        <nuxt-img
            src="/cat.png"
            alt="(3) &lt;nuxt-img&gt; with 2x size"
            class="w-full"
            width="1200"
            height="630"
            sizes="sm:500px lg:1000px"/>
      </div>

      <div>
        <h3>(4) Custom responsive plain &lt;img&gt; with pixel-device-ratio=2 support (retina, ipad, ...)</h3>
        <p>Fine on lighthouse scan, efficient for both 1x and 2x devices, looks sharp on retina</p>
        <p>
          <code>
            &lt;img
            src=&quot;/cat.png&quot;
            alt=&quot;(4) Custom responsive plain &lt;img&gt; with pixel-device-ratio=2 support (retina, ipad, ...)&quot;
            class=&quot;w-full&quot;
            width=&quot;1200&quot;
            height=&quot;630&quot;
            srcset=&quot;/_vercel/image?url=/cat.png&amp;w=250 250w, /_vercel/image?url=/cat.png&amp;w=500 500w, /_vercel/image?url=/cat.png&amp;w=1000 1000w&quot;
            sizes=&quot;(min-width: 640px) 500px, (min-width: 1024px) 1000px, 100vw&quot;/&gt;
          </code>
        </p>
        <img
            src="/cat.png"
            alt="(4) Custom responsive plain &lt;img&gt; with pixel-device-ratio=2 support (retina, ipad, ...)"
            class="w-full"
            width="1200"
            height="630"
            srcset="https://nuxt3-image-pixel-device-ratio-2x-support-info301.vercel.app/_vercel/image?url=/cat.png&w=250&q=100 250w, https://nuxt3-image-pixel-device-ratio-2x-support-info301.vercel.app/_vercel/image?url=/cat.png&w=500&q=100 500w, https://nuxt3-image-pixel-device-ratio-2x-support-info301.vercel.app/_vercel/image?url=/cat.png&w=1000&q=100 1000w"
            sizes="(min-width: 640px) 500px, (min-width: 1024px) 1000px, 100vw"/>
<!--        <img-->
<!--            src="/cat.png"-->
<!--            class="w-full"-->
<!--            width="1200"-->
<!--            height="630"-->
<!--            srcset="/_ipx/s_250x131/cat.png 250w, /_ipx/s_500x263/cat.png 500w, /_ipx/s_1000x525/cat.png 1000w"-->
<!--            sizes="(min-width: 640px) 500px, (min-width: 1024px) 1000px, 100vw"/>-->
      </div>

    </div>
  </div>
</template>
