import styled from "styled-components";
import { bg } from "../assets/images";
import { useState, useEffect } from "react";

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url(${bg});
  background-repeat: repeat;
  background-size: 700px;
`;

const Content = styled.div`
  position: relative;
  width: 1000px;
  margin: 100px auto;
  z-index: 1;
  background-color: #fff;
  padding: 50px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
`;

const H2 = styled.h2`
  font-size: 2em;
  margin-bottom: 20px;
`;

const P = styled.p`
  font-size: 1.2em;
  line-height: 1.6em;
`;

export const BgScrollAnimation = () => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setValue(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Background style={{ backgroundPosition: `${value}px` }} />
      <Content>
        <H2>Background moving on scroll</H2>
        <P>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
          atque quis ab aperiam reprehenderit, consequuntur voluptatibus
          voluptas omnis impedit illo, voluptatem ad amet nisi eveniet doloribus
          iste rerum. At libero, praesentium autem magni hic nostrum dolorum,
          quia vitae nisi consequatur numquam expedita. Inventore assumenda
          quidem vero error, consequuntur eveniet dolorem aspernatur ab totam
          cum neque commodi dignissimos iusto. Consectetur in dicta saepe
          perspiciatis quod adipisci quas impedit sunt ipsa distinctio soluta
          id, aut repellat sed at iusto accusamus cumque excepturi? Repellat
          consequatur, tenetur minus dolore unde assumenda quae distinctio
          laborum beatae soluta labore fugiat in fugit quo ut eaque sequi
          dolorum incidunt aspernatur corporis quidem voluptatibus voluptates
          nulla consectetur. Consequuntur, quo laboriosam sapiente sunt incidunt
          commodi ex quia. Veniam vitae molestias quibusdam ullam facilis,
          reprehenderit eligendi, excepturi quos ipsa facere omnis, suscipit
          blanditiis praesentium ratione delectus illo! Alias deserunt doloribus
          eveniet, nisi commodi natus iusto nemo optio! Molestias
          necessitatibus, atque magnam officiis dignissimos saepe magni
          veritatis accusamus illo commodi aliquam eum, a id eius doloremque
          delectus itaque quia doloribus nam quae dolore fugit quos recusandae!
          Cumque sit iste fugiat quia similique fugit quod eum aspernatur,
          doloribus nihil sint accusantium, distinctio tempora architecto iure
          quos provident tenetur! Atque minima voluptatibus hic, illum nemo
          consequuntur! Veniam sapiente quaerat, dolore possimus voluptatibus
          aliquid, quam, laborum blanditiis sequi pariatur dolorum illum ad
          cumque repellendus alias officiis eius! Animi totam illum incidunt
          voluptatibus minus, ab accusamus laboriosam doloremque ducimus natus?
          Laudantium itaque esse pariatur maiores soluta quis earum aspernatur,
          sunt quibusdam perspiciatis alias obcaecati velit! Voluptatum
          provident aliquid, aperiam fuga minus praesentium doloribus error
          vitae eaque illo corrupti suscipit. Voluptas quis, dolore officia
          ullam tempora illum totam quaerat tenetur autem maiores officiis
          reiciendis ad fugit numquam commodi nemo accusantium magni aperiam est
          aspernatur. Est laboriosam aliquam ab repudiandae, mollitia ut rerum,
          itaque, expedita labore accusantium neque? Excepturi pariatur
          accusamus fugiat sunt consectetur, veniam eius? Asperiores quos
          recusandae provident corrupti adipisci saepe velit quibusdam
          perferendis dolorum, ad, officia natus minus illum harum vel
          reprehenderit obcaecati blanditiis praesentium a explicabo aspernatur
          nemo consectetur nobis. Deleniti, ut voluptates quo, in vero accusamus
          dicta quibusdam repellat veniam, recusandae modi ipsa. Accusamus totam
          laudantium quod dolore voluptas facere, nostrum laborum, neque veniam,
          illo repellat dignissimos? Nisi corrupti cum dolor ut. Rem doloremque
          illum consequuntur provident voluptas recusandae quibusdam vitae
          temporibus voluptatum at qui id modi nihil veniam perferendis, omnis
          magnam quasi veritatis, facere eaque optio enim minus nisi! Esse
          soluta dolores aperiam doloribus reiciendis sequi unde non, commodi
          necessitatibus cupiditate debitis, iusto, voluptatem voluptatum
          voluptates quaerat vero maiores provident. Debitis aspernatur vel
          voluptas! Assumenda veniam magnam atque laudantium! Assumenda
          consequatur iure deserunt qui, totam architecto alias modi voluptate
          deleniti illo recusandae nobis. Ipsam magnam dolores dolorem molestias
          est aliquid placeat porro ipsa pariatur unde vero velit, quo
          dignissimos alias consequuntur magni voluptate ullam perspiciatis
          atque. Nisi explicabo veniam molestias distinctio quas eius? Quas,
          optio! Accusamus adipisci earum labore laborum veritatis quisquam
          quis, nam sed at numquam! Iste sapiente accusantium sequi nihil
          voluptatum nobis, quibusdam, perspiciatis sit rerum earum, fugit omnis
          similique dolorem! Nostrum officia quae sapiente corrupti optio maxime
          nesciunt debitis ratione beatae! Non quia tempora accusantium magni
          eius sint ex iure quaerat fugiat, vitae labore tenetur est quis
          tempore sapiente! Nulla vero rerum soluta autem aspernatur corporis
          impedit, ipsa tempore. Id quod explicabo cumque dolore consequatur
          recusandae doloribus nihil, iure dolor quibusdam eum delectus quam!
          Voluptatum, assumenda sit. Modi ipsam aliquam commodi, voluptatibus
          officia vitae harum ipsa, eum rem error quis dolores, ut provident
          neque quam. Blanditiis sequi suscipit non officia ea. Recusandae,
          nostrum eius aperiam itaque, nisi nemo odio non placeat officia
          repellat voluptatibus possimus quidem eveniet ducimus corrupti, ipsam
          quo? Earum accusantium nulla iste consequatur alias cupiditate cum,
          nam quidem aspernatur exercitationem officia nobis laborum voluptate
          molestiae quasi hic nostrum ex! Velit labore ut pariatur laudantium
          enim accusamus ipsum, aut reiciendis quod hic blanditiis dolores esse
          tenetur, beatae, ex cum inventore doloribus vel laborum. Cum tempora
          molestias eveniet id perferendis repellendus pariatur ea maiores
          veniam praesentium, maxime, natus nostrum ipsam, consequuntur aperiam.
          Facere minima praesentium error voluptate! Recusandae cum maiores
          officiis nobis voluptatibus excepturi quod est deleniti iure nihil
          asperiores quia, voluptas illum expedita exercitationem animi aut
          natus totam laboriosam beatae? Libero, qui beatae. Laudantium odio
          repellendus exercitationem laboriosam ratione dolorem eaque quas.
          Cupiditate cumque omnis doloribus dolore libero quis numquam
          distinctio consectetur, pariatur, architecto consequuntur dolorum
          sunt! Explicabo minima optio, veritatis molestiae aliquam
          reprehenderit similique aliquid cumque nulla cupiditate inventore
          numquam nam, itaque molestias deleniti magni a cum facere eveniet vero
          ipsam adipisci. Nulla, aut non. Est eius neque sed placeat ad omnis
          quasi, voluptate ipsa! Unde quae, necessitatibus error impedit
          doloribus cupiditate! At iusto accusantium enim, aperiam debitis nisi
          recusandae. Nulla cumque accusantium obcaecati rerum minus
          exercitationem placeat neque magnam reiciendis ut, repellat eveniet
          reprehenderit alias quam, laudantium rem vel quia tenetur inventore.
          Consectetur vitae, voluptatem eaque saepe deleniti, eum nihil
          reprehenderit asperiores, sit autem facilis quo voluptas rem ratione
          nostrum rerum vel quaerat! Perspiciatis, unde. Eos dolore magni, rerum
          sed quisquam aliquid, officiis id doloribus nostrum corporis numquam
          fuga quos omnis. Earum temporibus beatae qui doloremque accusamus
          voluptate quam dignissimos, dicta explicabo corrupti aliquid debitis
          quos nesciunt alias, eius voluptatum quas eveniet? Iusto repellat,
          impedit vero tenetur deserunt quaerat consequuntur similique facilis
          eos. Eius iusto odit nemo numquam temporibus doloremque, soluta sed,
          facere voluptates deserunt aliquid voluptatibus? Recusandae saepe
          officia commodi, velit aut sint expedita culpa temporibus? Dignissimos
          corrupti distinctio cumque sapiente hic, praesentium aperiam?
          Excepturi iure illo id, quam aliquid porro. Consequuntur corporis esse
          ratione blanditiis laboriosam quo odit debitis voluptates, veniam quam
          possimus iusto cumque vel nostrum cupiditate sapiente amet vitae
          pariatur corrupti autem repellat eius, repudiandae rem! Modi veritatis
          facere eos ab quo est dignissimos nam excepturi perferendis laboriosam
          dolor veniam aliquid accusantium iste, tenetur rerum. Quis deserunt
          possimus eum asperiores assumenda, adipisci deleniti commodi saepe
          aperiam ea cumque magnam reprehenderit vel veniam in ratione animi
          iusto at molestiae repellendus. Totam mollitia repellendus reiciendis
          dolorum quo nobis animi dolores, itaque explicabo molestiae. Enim, vel
          eius dolores cumque nihil esse fugiat saepe! Sequi, id quas facilis
          repellat aperiam ipsa delectus ea possimus inventore aspernatur,
          deserunt amet consequatur eveniet tempore. Inventore doloremque
          labore, molestiae facere vel error eligendi voluptatem dolorem
          sapiente molestias? Architecto quisquam dolorem doloremque, illo
          deleniti nostrum, corporis perferendis ea consequatur nulla nihil
          dolores, commodi facere eligendi nisi quos beatae necessitatibus
          aspernatur labore cum? Voluptas laborum laboriosam expedita recusandae
          quasi explicabo odio, eaque, officia odit accusamus vitae eos adipisci
          error similique fugiat distinctio culpa veritatis sapiente. Omnis est
          voluptates repudiandae obcaecati ipsa ipsam impedit nihil consequatur
          autem culpa explicabo nulla voluptas possimus quia tenetur commodi
          ducimus praesentium quisquam ratione voluptatum, ex vitae repellendus.
          Aperiam esse facilis suscipit ipsa soluta, animi modi repellendus
          perspiciatis autem nam maxime corrupti mollitia minus consectetur
          repellat vero nihil cupiditate aliquid, magni ratione eius cumque.
          Tenetur qui nam vel voluptatem nesciunt ad! Iusto, consequatur fugit
          ex beatae repellat quaerat magni tenetur officiis cupiditate sit qui
          voluptatum in non dolorem dignissimos, mollitia nemo? Vero voluptates
          sunt a saepe culpa. Ipsa illum itaque nulla id dolorem perferendis
          modi numquam mollitia excepturi soluta earum, voluptatum velit,
          repellat facilis, corrupti aliquam consequatur aliquid natus suscipit
          vitae dolore animi. Magni atque sed totam quos voluptates itaque,
          doloribus, veniam tempore nam architecto ipsum. Vero incidunt quidem
          impedit sed amet, pariatur eligendi. Eum porro accusantium, a, nobis
          facere doloribus molestiae nisi quidem dignissimos iste harum
          veritatis dolores non corporis fugiat qui at pariatur aperiam deleniti
          quae ad rem dicta id? Tempore possimus eveniet adipisci sunt! Porro ad
          minus, assumenda earum officia beatae ex, fugiat facere, culpa quam
          aspernatur maxime libero. Sit quaerat consequuntur aliquid, aliquam
          voluptatibus est! Nulla, culpa corporis vel enim, atque, autem labore
          at sint exercitationem ad praesentium sed. Libero nulla, eum nisi
          repellat ea inventore recusandae accusamus quae quaerat officia,
          labore, nemo fugiat suscipit vero delectus animi quasi odit.
          Quibusdam, dicta minima maiores commodi ullam ab! Dignissimos nam
          fugit mollitia. Sed ea dolor cum reprehenderit laborum impedit ipsa
          debitis veritatis. Animi sint voluptatem eveniet tempore numquam
          expedita, iste dolores doloremque. Voluptatum earum vero, deserunt
          nihil odit ipsam ea exercitationem dolor, tenetur ab veniam ut vitae
          soluta. Dolorem, repellat? Ex labore, cum ea omnis officia itaque nam
          rerum rem ut doloremque nesciunt aspernatur quod voluptatibus quae
          laudantium totam magnam. Nisi quasi recusandae temporibus similique
          vitae ducimus odio, vero voluptatum! Vitae quasi nam placeat
          recusandae! Incidunt, error eius soluta accusantium modi earum, optio
          amet ex reprehenderit deserunt, dolore nobis voluptate. Adipisci dolor
          eum laborum molestiae ullam iste ipsum, totam quia perspiciatis
          voluptatibus praesentium nulla pariatur soluta veritatis culpa itaque
          minus et architecto distinctio iure id sapiente, error omnis quaerat.
          Neque consectetur voluptatum quo dolorum deserunt eius sed nemo qui,
          laboriosam necessitatibus repudiandae! Tenetur quo quaerat cumque
          aperiam voluptas, excepturi maiores voluptatem, animi sunt obcaecati
          maxime optio ullam ex. Sunt nemo odio incidunt, ea quisquam recusandae
          expedita? Repellendus illo nesciunt, officia perspiciatis soluta
          aperiam commodi nemo praesentium ipsa, enim eius nobis autem incidunt
          cupiditate reprehenderit quam dicta modi a hic pariatur excepturi
          deleniti aut. Magnam accusamus nihil quam facilis maxime, fuga,
          voluptate quos odio assumenda incidunt repellendus accusantium
          voluptatibus similique? Officiis incidunt, omnis dolore expedita
          delectus saepe non blanditiis qui soluta ullam voluptate, nobis quos
          modi nulla quibusdam possimus enim ab natus repellat unde minus facere
          velit et fuga! Voluptatibus vero et adipisci! Vel incidunt illum
          officia qui modi obcaecati distinctio asperiores perspiciatis maiores
          animi est, itaque suscipit a unde optio dolor, rerum odio porro
          tenetur quibusdam, sapiente cumque voluptatum. Cupiditate, nam, ea
          voluptate quam, laudantium autem ipsa iste dignissimos laboriosam
          dolorum deleniti commodi! Consectetur exercitationem qui, deserunt
          reprehenderit consequatur distinctio ipsa nihil tempore? Corrupti quae
          est accusantium sed. Distinctio quam saepe aut quas accusamus, nulla
          doloremque dolorem blanditiis voluptate deserunt atque eum pariatur et
          repudiandae culpa debitis assumenda. Quibusdam iure officiis odio,
          corrupti repellat illo amet debitis laborum quasi libero, nisi
          assumenda aliquid quaerat necessitatibus? Sit quis officia dolore
          officiis soluta qui eum. Rerum beatae laboriosam delectus molestiae,
          nesciunt ducimus commodi reprehenderit odit mollitia veritatis facere
          reiciendis totam cupiditate accusantium non eius id, exercitationem
          error voluptatem. Aspernatur sint minima excepturi itaque repellendus
          sequi rem deleniti necessitatibus aut et! Quasi, quae ad. Omnis, neque
          nobis. Itaque architecto facilis dolore repellat excepturi corporis
          obcaecati nesciunt maxime est consequatur, consectetur tempore placeat
          magni veritatis? Cum in facere incidunt praesentium, fugiat esse
          impedit rerum eius. Iusto cumque rem quisquam mollitia consequatur
          veniam quibusdam voluptatum aspernatur, autem quas accusamus at dolore
          officia unde beatae iure nesciunt soluta. Nostrum praesentium eaque
          optio deleniti voluptas, nisi eveniet quia sed tempora consequuntur
          magni? Culpa voluptas error deleniti quas iure deserunt.
          Necessitatibus quibusdam facilis blanditiis praesentium? Dolore,
          accusantium iusto! Iste molestias, dignissimos mollitia veniam
          tenetur, fugit commodi delectus iure velit minus deserunt aliquam
          doloribus, tempore quam! Enim officia exercitationem consectetur rem
          maiores, iusto praesentium veritatis dolor neque ex quasi molestiae
          quod magnam molestias fugiat, quas velit ullam accusamus eligendi
          perferendis, cum ipsam!
        </P>
      </Content>
    </>
  );
};
