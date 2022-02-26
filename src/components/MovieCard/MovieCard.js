import React from "react";
import "./MovieCard.css";

const MovieCard = () => {
  return (
    <>
      <h4 className="Realaserader-h4-tab-dtata">Release Radar</h4>
      <div className="container2">
        <div className="box2">
          <img  src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYUFBcUFRQYGBcXGhoZGhkYGhkYGhoaHRcYHhodHRkaISwjGh0pIRcZJDYkKS0vMzMzGiI4PjgyPSw0MzIBCwsLDw4PHhISHjIpIio0MjIyMjI0MjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMv/AABEIAQMAwgMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAEBQMGAAECBwj/xABFEAACAQIEAwUFBgQEBQIHAAABAhEAAwQSITEFQVEGEyJhcTKBkaHwFEJSscHRByNi4TNygvEVJEOislOSFjRjc4PC0v/EABgBAAMBAQAAAAAAAAAAAAAAAAABAgME/8QAIhEAAgICAwEAAwEBAAAAAAAAAAECERIhAzFRQRMicWEE/9oADAMBAAIRAxEAPwC+4ejENB2lo22tWDJVNd5q5y1o0E2Sq9bZxUAatO9FBZIWrQNUnsV2w+2X8XbJ9h89kdbOifmFb/8AJT7jHHBh3s2hbNy9iHKWrYYIDlALszn2VAI5E66A0hjwJXZFKU4w1uxfvYqy1gWM2YBhcDKEVsyMAMwOaBoNQQYqLhHGr142mbCFLV9M6XRcW4QCudRcQKMhYbQWHKZqRjd2rmKW9o+O2sGttrm126loeWY6sf6VAJNHY3EpZt3LtwwltGdzEkKoJMAbmBTAlUV2aRcI45dvdw/2NlsYgFkui6rlBkZ1Ny2B4MwECGbUgGDUd7tE73b9rDYU3jhSFuk3VtyxUtlQEHOwjnlE86Yh+WqNhSLtD2k+xrYc2GcX3W2oDhGW44lVYMNt9fKoe03a5MBdsJiLRCXpHeowYIVyh5UgEhc6mRuDtOlMmiyq1dKCaU8Z4n3GHfEKguoid4QrgSgEllMENpr50s7X8bu4PCHFqAHVcgtyGTPcZAGYwC2QK0RAJahgi41FcqsHhWJyJct8RvNcGRmLC0bNwSCwyLbGQESAQdJ50/Z6SRRjLXDLXWauG1qgohcUM4om5Q7UDRDWVuKygoYW7dEosUNaJogUjNkwWa5da2jRXT0CBzVd7aYt0wpt2zF3EsuHtROjXDDNpqMqZzPKKshWqXisEOI44C7YuHC4a02UXbVy0ty87QSA4GZVVN+p86BCLtXg14Xi8FjrYItKFw10DmiplBMe0Tbn321q39qOAWseEti6bV+0O9s3U9pNQMwiCVkJMEEHKaC4x2AwdzD3UtYa3bush7t1BBDjVdZ2JAB8iaG7D4M4qxYXFW8XYxWERraXMt6wTbkAQxGR9AoKmT4ZikykEdm+MtiLOLwXEwuewyYe666LdF9u7tmVjKxaNRHtA6a0Lwf7TwnGYfAXLvf4PEl1sM2ly0V1ynqozKCNtZGWCptydl8KLF3Dm2WS8c95ndy9xpBzNcJzSCAd9IpDhruCQ/bFGLxK2Q9tMQwu30tj2XNvNqw0g3FVtj4ompKA+1vCrnErmIt27Vu4lq33Ftnum3kvnJcuOoyNniLSbjZxOpo/sfxm3i+GA4n7oOGxAefakJ4+YzB1J6Zj0ouziLGAuJhR3zPiGuXEGt0s4l7xDHY65iD103ofhHB8A+HxN2z3ty1iO879Ga4GZ1Y95Nt4ZLgM7QdfSmIT8Pt4jg2LsYU3DfwOKuG3az/4llydB5r4h5HUwp377TcLuWHu8X4beAZQ/wBptNrbui0xW4Y5MuRpHkSCDuz4CmDuXMNiEGKuyGXD3L5u3EQZWLZcxhSRbIzMJMATtQ2KwuBa9i7ATGmG7zFWbTXTbY3AXzZVbXOJMJvtHKgYv7dcQGJwvCsQBlF3FYd8p1y5lJInnHWnvaTBW7+Mwtq6ge3cs41WU8x/yvPcEbgjUEA1rtPh8FcODsXUva+LDW7OZFDW0B0yEZWVYidhtzqe0cNicSrC5eGIwwK92/eWmVXjMWtMAHR8qy0FTA10FNCKBxe/d4XZxHD75a5hb1q6MJeiSrFT/LePM+4mdicvp3FOGW8VYexdXNbdYMaEbEEHkQQCPStcZ4VaxdtrN5M9to02II2Kkag+YoXtFdxFpbF3D2mvd3d/m2kIzNaNt1aAx8RDFCANSQOU0wKTZx2L4I6WsQTfwBOVLoBz2p2BHIDXw6j8J0y16KjhgGBkEAgjYg6giqn2uxLY/CvhMNhr5e6UBa9ZuWbdoC4rFne6AJEbLJ9atOBwgtWrdoEkW7aICdyFUKD8qANlqwtWudZFMoxzULCpSK5igCHLWq7y1ugA5LdShakS2a7KgCTy3qbJYI0j73yqVAfxfIVD39pmAW4hJ2AdST6AGpVv282TOmb8OYZtp232pknbWifvfKuTaP4vlUmetq4aQCCRoROxgGD0MEH3ikBAEP4vlU6KfxfIVhSuPtltSQ1y2pG4LqCPUE0MaB+0mEuXcHiLVs/zLlq4icpYoQBPKdp86R9mO0WFtcNsm7dSycPZS3dRzluW7iKFZTaPjzEgkCJMiJmrepkSNQelDYzuxLsFBH3mA0/1HapKKP20YtxPhi27ot3CMXleFbKzWVCEqwIIJERz1jWiOxWOQYO7ZcC3iLBujEqx1Nwlma6Sfuv7QO24GgqxWsRac+FrbtE6FWOnPTXnWNibQY5ntTsZZJ9DP5VVCKf/AA+xCLhcDONMkMow82iCT3ukKouaQW8RI09I4tOv/E+K/wDO/ZvBhhnBs6kWCCT3in2f6SD8qv8AbtKDIVQeoArt7dsasEEkCSFGrEAanmSQPMmhgUztLj7f2zg903VCM15wzkJ4XsLlJzbTIGvMxW2uLiuL2ruHIe3h7Fy3euoQUZnPgtZxozKfGQNp61d3sqd1U8tQDpUd10RZYqijmSFUe86CkAM6HkY901OiH8XyrmxiLdwwlxGjfKytHwNEAU2wIWU/i+QoR5n2vkKIxGKtqcrXEU9GZQdp2JqKAQCCCDqCNQRyIPMUADsh6/KtMh/F8qL7uo3ABAJAzGBJ3MEwOpgE+gNMYJlM7/Ku2GlEG3XDCmANlrKly1ugLHEVjismuC9ZgeQrh04Xx8DIq2MYCEMaIbhGin7sXFiBEKwq48MsLe4hicXlWLCrhLbQJLDx3mmOTOtvyyuOZoH+K/AnxWDFy2ha7h2DoEBLlWIDqsaz7Lafgqw9nuFmxhrdpjmdVzXG/FcclrjH1dmNMQVexK20e5cOVEVnZjyVQST7gDXm/Ybjd9OKXbWLUp/xBFv21J2JUtbUaafy8yGdZQCrX2zfMlrCBbhXEXUS6yW7jBLAabktbU5c0BNY0cnYGq5/Evs41pMLiMIL9zEWbsqCb2JfLowOZsxUKyLAJA8bRrQ2CR6kFryv+IthDxnhYKKcz2w0qDmHfgAN1A13616VwjHfaLKXcjoXUFkdWR0b7ylWAOhkTsdxINedfxDtO3FeH3Fs3rlvDvba69u1ddVAvK26KZIAmBJ5UAepml2PUMjrAIZSCDqCCIg9RSq52n7y/h7NixfZbjnvblzD3rSW0VCd7iL4mIAHLfnFOsYwRHczCqScqs7bclUEsfICTQgPHf4RcYw2HsXhevW7bvdEZiAzKEHPmASfiakxWIw+J7Q4V7TW7iFAWZYYF1t3SCerDKmvkKdfwWwlyzZv27tq7bfvA4Fy3cSVKASCwAOo23qLjNt//iHD3haum1bRbb3BZulAxW6IzBYIl1GYaCdToaAPS0WqB/FvFXnsCzh5zWlGLvFTBW2jhU9+Ys/paJ5V6IYUEnYCT7qpfBuE28c2KxN8YlGu3Gt93nxOG/5dVy2lZJQOGGd9iP5hG4NDBD/spxkY3B2cSN3Txj8Lr4XH/uBjyipu0FtWwuIDAFe5uyCJBHdtyqgfwtF3B38TgXt3u4NxnsXXs3FRipymWZQFLIFImBKnqJ9A7R3MuEvmGJNq4oCqzsWZCFAVQSdSOVAyj/wMsgcPutAlsQ+sawLdoAE+RzfE16TFeY/wvx4wOBa1ibOKR+9d8v2XEN4SqAarbI1ynnV57M8SuYnDi9ctNZZnuRbdSjKgdgmYHWSoBJ6nTSgDz7+LVhGx3C8yKc90q0gHMve2PC3UeJtD+I9a9PNrWvOP4o2nfG8OZLV51sPnuG3auOqKblojxKpBMIxgSdBpqKs+J7VBrli1h7F9+9uqty4+Hv20t292Ym4igk7DkJJOwBLEPmSvMf4mcUu27lq7ZDRgLttrpBGUvdUkKeeiKAfK/XpuNxK2rb3WDEICSFUsxjkqqCSTtAqg8P7M2sZgbt3ENfW7iO8uXVz4hFS6WJUGwYDlALajwme7ETpTAuWDxSXraXkMrcRXU/0sAR6HWunMVSP4VYq8uGbCYi1dRrTE2i9u4itbYyQGYDUMTpvDDTQ1c7zU0BH3laqOspgPWkUPh72bONJVipEzB0InpIIPvqPA8RS8guWySDup0ZT+FhyP0JFU7h3am2Mfdz2zbW5KMcysQbcKrug8QEA8tM2tRQ0XxFrHHlWkuqQGUgg6gjUH96kW7SA3aWpK5LgVG5mmI7B1ro1DngedQ3b8ikAS90Vwbope900De4xZRgj3rasTGUuoPLlOm4+IpoCwLcBrC1Co4FV/tXxlrYFu0+W44kvvkWY89SZ+Bo6AtQatzXjGJv3ZFxbrZxMnOZkZec7SyweYYVe+x/aE4m2yXCDdt7kffXk3rqJjqKSaY2mi2lqwNQ01sVQgoGtmog9a7ykB1nrReoy9azUwOmauHJrlnqLFYlbSNccwqiSdT5DQakkkAAakmgDbmg7xpRju1KJmK23uW1+8hGYmQDCH7gnViRsYBGtRcEx9y7bZ7rITnYDIpWFEQDO86kHoRzmhSV0NxdWM81ZUGasqiCtYW89tgyNkuKcp5gwYZXX7wBB8xuCDTTszatHFXCUQO6O0BQMpZ1L5CNdcxM7/ACoLi9oJeuCYzRdX/UIb4srH31FhNGiehDKYIMaEcxVKpRItwdF/sW+7ZgIKGCBsVbn5Qfl+Reh5VWOA9oQ7dzfhbgbu1uRlW6RsCNkc8hs33egsjg8qyaa7NU7Ow2sVtoFDM0UOcQTSsdBFy4KEdq3r1rlSdqQzTTFeR9qLlq5ih3NwJbUQIIFtrmZg7J00zDkDBPOT6pxq5kw9522S1cY+gQk/lXzy5u3nL5XaSfEdtN/EdBtTiI9t/h/xA3sP3b/4lk5GEgnIZ7s6abAj/TQ7W1bHYtbolX7tVmRCi0minoGLbc2NUrsV2kThyXyyFndFKKIyyuYguZ28XKTRnD+JXMUlx2dlvl5fQdWkCQco5CQYyijkXpfG92Fcc4Fk8QZ8vtZZ9CNYnkPgKA7K4x7fEbCJAW4x8wRlOYCPIE1nHcfjLdlS2RkclJg5gF/rgTqenLakGC4g9sK63HW6jMUdcocDwAqDGq+Iz6n0qYR0VyU3SR9CZqxXrzfhv8TkIUXbTQEAZ1MlnA3yxAUkddJ2q84PFpetrctsGVhIIM1o1RiG3LwAoNsVyro2iedb+yQQaVjIxeNF2kJ1NbS18a7M0WFG4rzzthxjvLmS3tblSTJghmzMAAeia8tPOL/fulUZuaqxHqASK8dxLwLtxp1OXTqxzHbcTmNZckjXjj9JQ720NxXLKyrBnUMR5sWM7DfzqfgWOvJiFTuiFusoKgyoABJaPukLJ84Apbc4j4EZApE5WDABgYEAMNhv9bR3OKXGuILQJuGBbAicxYZf9U6dKiD2XNKj03u6ypLI8K54zwM0bZo1j31qujIwoH7Z4HW040PiX12I/wD2+NLltez4dQBB5j6/Wm3bC7mt2v8A7s+7I0/pS3DElV9AevlWnG9GHLqQHimFu7DRlu5DlMw8jKVEA+IFViYEuNRrNgw3FzZAFx81o+zdO9sR9880/q3XnIlgg4+uZU5MjaE7ANEGeQzrbk9AaI4ZjFa3kI9rUA6EMApYeUEgDnKv0qmk9MmLa2i6KmbXedfKuvsoqvcAvtbYW1I7skgqxI7uQcpt76FoBQ6S0giIaw3b0VjKNG8ZWbNkV2EAqFLnnSjtbYNzC3EVHdzqgt7hhzmQI33qRlb7edq1ynC2Cr5wRcYLnGWPEo5baE7a15ZirLk5CRIJhF2B0IGUbbzyqbEYp1LE6EDLpoQJ129PfNcoIJIAhjrqd4BInSSZn3VpddAkQGyQ6qGElkBnYeIbxpH7Ux4HxU2cQxOpuM2jbkm4zKDO0gn5UVwzgd7ElihW2iRLsM0HXKqCd/DMjy61Xu0HDblm7/MaS3suugJWJ0OoI0+VTNOSKg1Hruy1dpbl1hbdtWYBphcgaIbSd9122FVLF4iVuEfdOUHzJBPu0FN8di7j4VLhBmCT0zLcKEATMaDlp1mk1y1lwttiNXcsTHIF1BmddUbQ+XWs+O12VyNN6B7F6D18tquPZXjFy2+W21xQdCoiGPry9TVQsJHikSNpIj1pjgcUbQBf72oAEaeu43+db5GVHvvA+KpfTMh20gkFpG9NA551432M473eKtgubdlzBAIPLQE9J3jzr2wKDqDIPMdKicaY0yNbojesVwTWfZhJNdhIqRgvFVHc3dD/AIbxG85TEV5YcOLneW9IMEeseE/E/OvXGQxp/f515JjF7sMARnk2ljbfV9OgOnmVrOaNONmuE8HOIt3LNtkS6jq/8wEgpBVxoCZByn38qumA4BYw4XJbUuk/zSoNwkjxHMdROugMAGKqnAStq/au5mCmVaTPtAr4pnQNqf8ALPMVfmWd6qFNWLktOgfNWVN9n86ytKRlkA9piDbUcw6R/qz/AP8AHzpbh2GUct/zmp+11wZBlInvBr/Sqof/ACuGk2HbRhMmffqAdeo1q+Pox53+w+uWkuMysJVkjL5QQf1FVFsKc4OZme1cAYDQmdVYeb+IzzZsvnVlRy2QDWdDrrEH96D45w7vCXtGLgU7feG+U+cwQevxGjREZE9i6xXPHjSVYbZlBgiOsax166GrTgcQtxA0yRofPSQfeCPfNU/hOPFxS+1wQLqxEsIAePMaH0HQU54KxW4UHstt01kj4GR/qpTjas0g6ZYUWeVSMnhIBgwYO8GNDB3iu1wsc62yRymsTU8K7SdlcRbZjcbMSWJM6tqJfXceKdNpA30Fato5Yoysokxm0B0BJjfYD0ir5/EfHm7ie77yLdrRcoPtx4wepkROo8tJPn78TuF8rOwXYbMPT0Ous/2yt3o2pVtUO+Eccu2O8RBmRypykxJAiQeXIba5V6Us4/i7l91LhQqCFRWmJiZJGpOUfCh7uKgAqd4mekafkKgwOMXPDSczayB00E8j+9Xk0Z1ZP9qJwty1mGl1Sqn2srZiwH9OZVPST51mLDfYrE5o7y4FnLEEttz3zb+dbv27ZOZHUggTHWNQQdQZ+NaxOJL2bVsnS2WM9ZIP6mjxoPQXC7wdtTpyiN6KdDkJJicw2101AjrzreGOYDkwOu2oO8+4E0FjlfvGUaiZHw/3qyR/2S4natX0N/2FPiJGYlAd46xrH619FpcDAFTIIkEbEHYivlWzAOgzH00B8hpJ941519LdmrYGEw4R3dO6tlXYZWZSgIJX7uh25bU5JUCsbzWi9QPPI0LctNvm+FZjDTiANK8q7QWwmJuhQQc2bLuFBY5YPKe8mP6fKvQrjm2hc6BRJJ+t6oWPvd53jNGZzJ94ygTzgEe4Com6RrxrbKxjL5RSFJAmeWsDykRXsdq3CIrHxBVBPMkKJPvNeO3/ABDaNYA9RH7V6zibN3WHAg8/7U+JXYuZ9BWTyNbpdkf/ANU/AVlbYHNkJe1Qi2ORlf8Avu3Cp18rVKcK4101PPbl/tTDtpdXuws6hrSmP/p2mJ+d2kFm6Y32j8v7VXGqFz/s7HKXSqiDrqPTp+nwplYukgOfvfrSFL2/PTSKZYbFALlJ229NxH1yrVMwUTL+E/mG4hCudZ+6TzBHMGPyPWTMNfIKPBBnbfUeIQeYldKEGMDkRyonCvpEbTFGjWNnoK3QdaWdoOMW8NaZ3dVYg5Ax9po5DmBIJ8qD4vxb7Lg+/KljkUKIMFiojMQDlXqf1IrxbiPa27ec/anzyItgKERRz0XUNKqSddd5AArllpaOqCt7JL90nVhmJHtH8wekVX7WCN66tu0pZ3YKijmSfkBuTyAJNc4jEhjlXNDGBtueW+hkivb+xvZO1wuw968Qb2QtduAEi2gGYpb55RGpGrEDoAM4x+lzlejw7iOAuWXe1cXK6tkdCQYK+YJB33FDi3qtzIVCkTAkkzoT0Gw2q08WxVvE3rl64CzXLhIElTkzxbUQdDlCieUjpQaYBbsoCVSATlffxHKYY7aGJBnffYzRf4JKGWhDiSVeFEA6jmSPM/tQ94bDUbfX61ZOIYG2AqtmJQEBjdAJHOQLe3Ie+kNxbc6kGP6zG2n/AE6admckRrfZXIDQB0/erPjOz17D2rOIbxW71tbmYA+BmWcjzzgjXnr0pAyI2ZgswRmIzHUzHtEDkdhyr3LgNn7Zwq2jeItZNo5zrnQFVLE6zKqZ61ZDPF7RfNKKqgyM7fpXqfYrt9aFoYfE3Gz2wFR8kBkCqACEHhI6nlvtXl+PtPYc2nQrdQ5SH1IMakxpttEiDpvJH4ZZIzPpoRz11kbdJ06zFS5aKa0fSL4oHb5UbgdSSZ8qqfZLiZu4S3d2yyhmJ8GkmDAnf31ri/HXKm2jHXQkaGOfp9edDkkrFGDkzXa3jAuHurZlFMsRszA7f5R8z6TVUFuQXJgEEL5g7seusR/eibNrvIUewTqdg55Af08vP0obGXCSQNAu58/w+7n5iOtSotptluWLSQkdv5kTu4/8tPzr1Nr7MTPWvMLK5sRaXrdtD3Zln5TXphetuDpmP/R2jrK3T8qyu++X8X51ut7/AMOcpPam+L1wC3bbKDcbRd5KqNugtj0k0DhsFfaO7tPqOcD4SR9TTPC4lSf/AHfNqJtYlQMpIEkxOmkwRXOpM3kk+xaeHX1u27dy3ke6Sq5mWCRB+6WjcDanNzg4tmLlyX1XKgkSIIlzH3TMROnKlHE8QzrbfMSLboVnkZk68vZHwp8HDRB9oCPIgysj3/Baecgwj2S4XhqDUZo56j9qfWjZtoS9sZQJLSdB11P7UDg2BEkR18o3HxBqPjz3BbUIDlZ8twruqFW8XWA2WSPymmpNvYnpaAP4iYxXt4S0jDu3uMeR1RB3cE7ghjEevKvL+LYdHzSIIIAMbkRMdNdIqw8b4iX7iyIbucxc7S5PKP6VBPMljr1q/Erj3G7tBLEhFUDKCWYKAo5akCD06VnLUmrOiMZfjUmuxz/DDD4V8aq4oZ3MdykOQbitnztl0hQmzaeLbTT3rEW0uKyOoZXBVlYSGUiCCOYIO1UP+HfZe1gwLt1g+IcEM+gVM2WUHpl30mTpXoDW5Gh3Gh0PofOizLs+ceO2AmJYooS0t5ikEEBVut4fUKQI/p571xwe8qXTmaPFrlbLKqXUKGmcobKSRqQ3lUnEOKd3dukOxc3XNxgVKuczZmB0GRjsDAIiBpFR2uJ2Sc1xFEnRhbQctRlQSdhy5isqb+HXKX6pDXii23JKJbJYTcYlDCxquYqZTq4/mbc9KV4jK6BEVgJEFvCsZh93NEZQwy5eYJJIJY37SAuZYVXAyGAM0gEQDHqBvQ2O4S5UEXCzsubKWCoRlnddfdPMSQCJUU0S2mR27S4exkhSSczNBzZhPXZQPDp5nnp6r/DLGtd4fbJQLka4kxAeGnPpufFBPNg1eRWMCyd6jsjM9sgAE5lZYkQwnTaRMwNdqv8A/DXijWsG1tRmbvXcyRlQMFgacjlJnqTWkX2zKadJFP7eYW5Y4jcN5jd7yWtkkg92T4BMQMpERroOUikbPc0c5jbXKpknIF1IWdgDqY5mTXrPam2mMtxcCM6q4tvGltmWJBEdAd+QrzHH4Vg2S4VJX7w0TYHwjKN9B1JpSKjF1TLHwLiRtWcVbDgQ5uW5nL4k8Jjyyjz2GtEcCc3GdyD3eVczE+1cHtAjeBOYz+IVTsPi/Ccs6qEYERpmBH5fDTSrjwWxlsIWIg/zI+74tQT1MR8KqKpGc34NLl/PokhfxbE+S9B5/DrS/E3xOVRMbnkP3PlUl6+X2OVeZOhPp0Hnv6UG9wRCiF69f7Vc22qI41ciPhWJS3ikuXJypmMASSchCgD1IPuqwX+2ds/4dlj/AJ2CfIBvzqpM+VzHzqC4ZJPWlC4rRXIlKRbP/i65/wCla+LfvWVUu9PlWVWbIwQ/KG2VneTPKDO4PPTn51tMOXaMxYEydyw6mOegozCYlSDOwJQTzEkR5j+9a4ZikR3bJlFomWncK3y/vUKZU+NM5xJNxWXLoZgb6+vXepcPee3GYba8t5M6jQ6SKixeIXvmyKuVwrh5hoYaACP6Tz2FDYjGKAwtnVWCmdpkDYR15dBRkP8AHaWyyYHHuTtPPeNtOfkPlRmO48tq07lS0CIEDVoHMbSeY5VXExptojke0Y0ETuNjqByqPiua5nVNjkkQDoZDH1CiQOoFGQ/x/wClNxuNZmLMS1yRJOsnmZmnPYBLbYxnuGGS0zW5E+IuqsR0IBj/AFGheJ27CBktYe4622yPdLFZb3GJ20jmNKd9nLapbbwFczSFIMhSq6GdtZMHXXlUru6N5Sk44t68LJj8cJa48ZRrtsOvkfnr6VSuI9qbly21tHYKToqXSiCD1EZiec6DkJ1p5j4uRbKyu5BMD+mT5bx6VX+IWwCRyA5ajUcqatslYxV/SrX7egIKSdNAxkTyZ9Dt0ihLqGScxaBz3XXpyG+o0orFuEJH3Ty6aaMPP9vSswdoZvGSCNmBgwfP7wP1vWygpLWmYynK9hF22DhbdyVzqQpUg5ioY6g7HQrp0Fa4VcIvLbzsFLZYmV1JAGQ6ZZZTHlUT3rbW2tsSLiuShiFYGBrroTE0KQVM6g6kHoQJB+VZSj8LUg/iHEn71T+Eq3PWRruZAIJ+NOez3Ee7F140DAnUkC28jYbhSA09JpH2i/x2O4YBh/lYBkHn4StE8HxVwObdkqHcZfEBlIC8ieehPvNEY+A5NbL8pzw0m4OUaJ7vKkPaXCjvLVwwGMqRrGUeZ568h+VHcOVrVsWzcDGSzECZZjJ1qLH2FuqQ4LRrJYgj0I2rRwdUc65G5X2VPC2j3hIykfe8XKdhpvVsw1xcixJAEKvQARtyO41/KkeI4Y02kCG1KElj44MSQ4AWG8QgedO7AyKFUbACT5DpUxjI0m4sluajM505Ly/uaHv3ZgkRzrbHXUyfy/ao1t53C9d/Qb/t76UlsqDSQKyTuNTr+dbVOtP/ALDPQVxe4XpuPnS0TnvYh7sVlOP+HL+L6+FZQVmiDB4jw6xzbbbUn461HgsUMzZtnLgjLyZp1MelK2xBjVm9J+voVyuI9fia0XHH0h8j8GguDvNJKhVQAAkGJPL1/OpntyNiJYHQa7gzI9APf5UuTED+r41KmJA6n1NGEfQ/I/BzYxQCZWBgagxPOhLV+SWKmSecCANt6X9/PL51KH6AUKEfoOcr0NrS5yrn/pXLVyFIPiW4sE7CSQvwHnXfEV7u9dTPADtEaypaVO34SPjWuzqG411PCAbftEaA5hE89ZO35TXHH7TWmtlritmVUDLqCUQDfn4QDOm8VqsaMrlbIWxUjKNP1jzpFxfFGPDy+iPlvRBdssfh3M+eh9Y/Kkz+K4yk6A/3rkT2dj6FV18xM1u1imUZSAwGgncejfofdFS3hmbTb15D9amw/Ci4nNl6SJn3zWu/hiyJrYcaxPXr6/vW8Rh2S2GBBExvmA35HUflU97BtbAkg8tP7++oLt2Vgin/AECTit4HusygkWbQkEj/AKanXqdaI4FlN9ZBBjMNeYGg+H5VFxAIwtgjKVt2wYO/gX9IHuqJbgt5WQHMoUyecch0kae+nFJUwk30X3P4CNjIIMeUEfIH41zhlJdAozksPDyIGrSYOkA8qGwd/OAVEhgI9+1N+FuLZa48KqggMfxGNB18IbbrWtpsy3QHxTFd5dZxbKn2SDEyvX40GxPM+4UxSy1zNc0IJktIVddRqa4x+E7tynNY19VB/WonJjSQucRtR/DsPAzbFvy5fHf4VHZwxJk7fn5elHKTvWaQSkG4exO5qZsOB94/L9qAXFMNq5GKZonT41agZOTsY/Yh+I1ulv2u59GsowDIrj2R0/Xn5/lUF2ws6DoflTW9bYQSIGk9Y5mhlsZjBXqemw8xSxLjyEFuyI0BPPSue78vr86YrhgBMGeYIJ+UetQoJM5Tpyg+gnUHcjbyoxKzIVs+Ro5eGsLAugMw702yI0UZM2cmdBJy+pFc2LYAkmPLafdVy4HiLZwV1LmuY3BC6EAJaJIMEAjQ7cqaiJyEHC3W0j3LkBToJ5sDpyiPEfQgGCAap+P4lcxV7MrEqmqrlyAADwkQTMkCcxJPuADzti7XblvCWYUWf5lxhJC5hCAncnLJjnmHnQtjBLbUKg9SRqfX9qTt6DrbE2GxDBiLjROXYeEETIPPXSPMVvHYNklgWIbXNkhNvxLmzb7abUVicKUDMAGG5BHIfnQjYgZY10GxaVGsjSawlB5WdMJpxoX2kidfzpxw58yQRBWBt8PrypdbXNoBPpTrgySHG2k6iQSFJA9/XzrWJmzi/aDqVOoO3ry+vKq2yMQCfMT58x61bbjabQR5CPKq7i8PluEiROvx325TNVJVsmMk9HGJvZz7IXwge8b/AD/ShoMrl3BEesjSi0tN1Ef5VP6VyVOdYGsjpEz0AgVKkW0y38HxS2biuGyhZ1gnKCDJhQSYmYAOwpnaCi293vWa9di6lvJctnIqN47YuhTdVmCklRA8xrVdtWZOgmOgP11rm5we47Iy4hgyEZO8YsqdAD9xR01HlVyi+0ZRkgnHOblu1kMwxkxAL+BWiN18Cxt151Y8fbIvMGIJETrO6gjfyikz8PNu7atGBmcMcs5Y/liAdzGo1g6HypnfP8xjvqQD15Cm1+om9hKxEDbausnl9e+h0czt8/7VILkbjXmN6kkxrfwrXcqDrP5Vu1eBOoEUS6y0wB6TH7cqabQqRD3Y/D8q3RmRevzrKdhiKsRhyQBBKjyPv1oC7hgCSFIGmuX06jrrVgkNoPnUOIw8AsY0G1JMTgILWHEyd+hUjf3ipTay8zB6Fh8ppjbGxCwVIMwSfcCCJ9aiu2QF0HvOp90DSqtC2gTbcnpp+9G4TiLWUuBEDF4ADAlS2oh/6CCQT0PnUdm2Y9kT1k/7fKiFsmfa130H7UddBl6LreEyjUks5Lu5iXYnxMfU8uW1R3U6/pTJ3b8R92ooV0JOg9dIH7D0pUU5IAFkkmBPXSfyoHE8GVQpWYy62xAMCRILb6ec037gx7QP9Mn5CIqWyi7SR1kHT50Y2JcmLKymFMDSJOgAPuM/t1o/AJB9dD8DHv3o7F4UBtHlWP3Qf21odAFOnKND7tKz3GRu3lHQR3Q1BA59dPSP70t4rh/5YJ3B03n3joasNhkZM2VpPmIETpzLfKk3H78lQFgARAnfWdTqPTUVtNrE54NudeFeRiDp8ufu6VJaYd4CxgA/rrt67mo1Gsx8a7NveBv5/Xn8DXMjs7RasPbkEgepgmQBM6HfT4zU9u3y+REe6knZ627OVk5Ap3kAGVEDzq32sOMvKB6mfeTXQnas45WnRw2KULbD2yXtMTaZdgWBXK065TKn1RelaS2JMnTrtNFJhyfvBTrAPPYGDyI5dYqIKY3APKBv7zAqcl0Xi3TIbijyPr/vQ93EKgmZjcDf3Chb2MczmIGsADl8qFxBkzrO/SpsrD0MucYRWgmAdRppO0+R0ptYbORqsROjeW2lUnF4cOdTrv8A3ppwq6bZ3IMjb0Py1p2PAtmX6+hW6W/aLvX8/wB6yixYMjbHRvEfXKtXOIymhUiT0+fmPKgwRpp5UFjbZ1iR8+XX30FBycSUAhlIPQaz16b1N9qtkEhvCfuldeo+flVcQGYNNMIFg5o5R752n0PKplKgULGVrFoDl0nQwV12/vRlrmIHnoN6TpkJAykneDBny2kVMGO2XKdJge0BtI+v1oykJ8cWNCpPL5dOtB3bRY6T9TUOEuMkgE+jax+VGd+n3lE9ATuOpPWPzolyY/G/4Q+LwiW1A2zeZAPy6VtmPswByn9ookYp2/6a5Z3JI+ZMH3Ur4ninDCPZ6g6k/oDG9WuXdUZy4n8IsexkCddjHmNiYOsT0oHTcnSdfTnvz3rZbM0zM89duldvh88gEkfExvvUTknKzeKpUEJigsIEIUGS5knaeUDpTi9bF20wJUsUOUkjQyIMnrG2u58qWYXDhS0KI6xPiPPfQTG9SX8UyFcoGsjTYRGkARPl1NNT+Ml8e7RVrljXzHL3+dQuh6+74cqd3Ahcvc+/yGgnnqsc+QoPE4ZTqk5R1kEbfEa1NGqY97CIrJeWfErK0HYKVOonnIafQVZUCkGDrGmwH1tSXsvwooq3lYjvLYBGslg7yRygiNPIedPyuXadfdA9OVPLRDgm7B2uKM2hkAkSYnoNfSldxZzTJM77n/amJRmJInz1+pqDEYUk8p0+pqXvspaFLYCGzA6D3/L0og4WF2JPn5j5UYnhJ6a8vdXDmREb601oYkfCiT4fTy6+tE4a0sSRI2PX63ox1g6ctRyqbOWGkjz/AL02wQH3w+j/AHrK77s9f+6spDs1asSfI9etbxHDyII13JBPppHvGlF9xHPflRKLmEN9efkaLFXpVXwI3JMyOvOjkw4YQSROukCmxw+WYAmSOo+tRUtvBZYnWYqe2PoXW8FnA8UACQPQaE0RftC3EgBRseYEbnnp+lMEsRK6AenmNPl+dKMbdBuG2GhgknQ7TvMafd2oWgB7ty3pqdZ0ykeEzJKnlHLfUClFnFMtxyYVWPsiJmNPIRAH1NNwFU7kabggCZI2G+8cztS7Eslw+DwsfanMCQdBm00Jg6eW+1VsWgtce6o3NiToWJABgALAjp03mhbqnuwpJLATMek7chEVvFqVtjxAZdNBrGkkeenOda275oVSSWEaTOokCTy5n050mnexWbwOCMeInX+miSAoAEb+/YGfn9aUM+KKIoLHNlBOnhI3M666R8AN6A/4gJYnSd5OnKYnYT+VIYTjmZSMzZgPEI2DHnv86gxPECSyqTrGo2B5bjTnr51A3EQcpAJO4A302n4/U1A+JYmSI9+noaACbN1bazmfwnUNBHLafPr1qZsSr+IGDoIO52201P0aT4ly7ETEk9BGunwrdq2V0J1066mDprTugovfBOOWxbW2/hZNJYQN9OsfIU5uXJ9N9DvXnQu5SsHcRrqNBsR0IJ+VOOFcYNo5GBKGNAdUP3gAd4PmNviqVhZce+UrAEHXauAvOuLDhlDocynYj56fUVK76eXmKdhQM9sHoPjQ75BoZPw/epLlzf6FBX39xpgTuo3CzUDXhtlAHv5c/nXBuSBvPn+nSg3uTodPP/aigsK763+L/tNZQM/5qygB823xqSx+n71lZUxGw/IBOnP9qmZBl25VlZSY/pG2kfXWqWbrM7sSZz5Z20kaaep+NarKH0IFxN1sg1O7a8/a678qU3LrZm1PtKPkKysoBEWIczE8x+dTpebORJjw6e8fvWVlCBkPErzTbGY6trrvBXfrSfFXmzPr9SaysqgQTw9zDmfqDUxcnc1uspr4Szu3p8f0piqBiZE1lZVLsTFlxyCuvMfnRVzRNNP9jWVlQUW/sx/8uvkz/wDkf3puu3vrKyh9gA3T4fcaGbU1lZTA0/61Gu/uFZWVEhoiyjoKysrKYz//2Q==" />
          <p>assassin's creed valhalla</p>
          <p>₹3,399</p>
        </div>

        <div className="box2">
          <img  src="https://upload.wikimedia.org/wikipedia/en/thumb/e/e1/Spider-Man_PS4_cover.jpg/220px-Spider-Man_PS4_cover.jpg" />
          <p>Iron Danger</p>
          <p>₹3,399</p>
        </div>

        <div className="box2">
          <img  src="https://upload.wikimedia.org/wikipedia/en/thumb/e/e1/Spider-Man_PS4_cover.jpg/220px-Spider-Man_PS4_cover.jpg" />
          <p>SpiderMan</p>
          <p>₹3,399</p>
        </div>

        <div className="box2">
          <img  src="https://upload.wikimedia.org/wikipedia/en/thumb/e/e1/Spider-Man_PS4_cover.jpg/220px-Spider-Man_PS4_cover.jpg" />
          <p>Avengers</p>
          <p>₹3,399</p>
        </div>
        {/* <div className="box">
          <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLmUlRMoqOYmyeW5EI5JRn2ApjrBsUWDgp4A&usqp=CAU" />
          <p>Clash of Clan</p>
          <p>₹3,399</p>
        </div> */}
      </div>

      <div className="container">
        <div className="box-2">
          <img  src="https://www.gamespot.com/a/uploads/screen_kubrick/1632/16320660/3942588-fl1zbwzx0aifuiv.jfif.jpg" />
          <p>Fortnite</p>
          <p>
          Fortnite Iconic Uncharted characters Nathan Drake and Chloe Frazer Come To The Fortnite Island.
          </p>
          <button>-20%</button>
          <span>₹567.20</span>
        </div>

        <div className="box-2">
          <img src="https://i.ytimg.com/vi/xAPsmI_zDZs/maxresdefault.jpg" />
          <p> SMITE - New God</p>
          <p>
         
New SMITE God: Shiva, The Destroyer, makes his divine appearance on the Battleground!
          </p>
          <button>-20%</button>
          <span>₹567.20</span>
        </div>

        <div className="box-2">
          <img src="data:image/jpeg;base64,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" />
          <p>Assassin's Creed Valhalla - Bundles Sale</p>
          <p>
          
Get 40% off the new Ragnarök & AC Complete Edition bundle.
          </p>
          <button>-20%</button>
          <span>₹567.20</span>
        </div>
      </div>
    </>
  );
};

export default MovieCard;
