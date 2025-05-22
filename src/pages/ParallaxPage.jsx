import styled from "styled-components";
import {
  hill1,
  hill2,
  hill3,
  hill4,
  hill5,
  leaf,
  plant,
  tree,
} from "../assets";
import { useEffect, useState } from "react";

const Container = styled.div`
  background-color: #f9f9f9;
  min-height: 100dvh;
`;

const StyledHeader = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding: 30px 100px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  z-index: 100;
`;

const Logo = styled.h2`
  font-size: 2em;
  color: #539381;
  margin-right: 270px;
`;

const Link = styled.a`
  text-decoration: none;
  color: #539381;
  padding: 6px 15px;
  border-radius: 20px;
  margin: 0 10px;
  font-weight: 600;
  transition: 0.5s;

  &:hover {
    background-color: #539381;
    color: #fff;
  }
`;

const SectionParallax = styled.section`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  overflow: hidden;
`;

const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  pointer-events: none;
`;

const Heading = styled.h1`
  position: absolute;
  font-size: 5em;
  color: #fff;
  text-shadow: 2px 2px 2px 4px rgba(0, 0, 0, 0.2);
`;

const SectionContent = styled.section`
  position: relative;
  background-color: #003329;
  padding: 100px;
`;

const SubHeading = styled.h2`
  font-size: 3em;
  color: #fff;
  margin-bottom: 10px;
`;

const StyledContent = styled.p`
  font-size: 1em;
  color: #fff;
  font-weight: 300;
`;

export const ParallaxPage = () => {
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
    <Container>
      <StyledHeader>
        <Logo>Logo</Logo>
        <nav>
          <Link href="#">Home</Link>
          <Link href="#">About</Link>
          <Link href="#">Services</Link>
          <Link href="#">Contact</Link>
        </nav>
      </StyledHeader>
      <SectionParallax>
        <Image style={{ top: `${value * 1}px` }} src={hill1} />
        <Image src={hill2} />
        <Image src={hill3} />
        <Image style={{ left: `${value * -1.5}px` }} src={hill4} />
        <Image style={{ left: `${value * 1.5}px` }} src={hill5} />
        <Image
          style={{ top: `${value * -1.5}px`, left: `${value * 1.5}px` }}
          src={leaf}
        />
        <Image src={plant} />
        <Image src={tree} />
        <Heading style={{ marginTop: `${value * 2.5}px` }}>
          Parallax Website
        </Heading>
      </SectionParallax>
      <SectionContent>
        <SubHeading>Parallax Scrolling Website</SubHeading>
        <StyledContent>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis,
          commodi. Aperiam ab reiciendis mollitia eveniet quam illo delectus
          voluptatem voluptate esse, dicta cumque commodi vero ut rerum natus
          assumenda excepturi. Illo facere perspiciatis deserunt dolor similique
          quidem suscipit natus unde maiores incidunt! Odio aut laboriosam
          ratione esse aliquam vel qui harum tenetur quasi repudiandae vitae
          omnis, ipsa optio doloribus dolor nulla amet? Consectetur iure
          voluptas maxime recusandae dolorem nostrum harum nam tempore porro
          modi provident, numquam dolorum laborum quisquam illo molestias
          accusantium neque, nobis nisi est officiis beatae! Enim est blanditiis
          facilis similique aut itaque dolore temporibus dolor eligendi
          molestiae ad amet veritatis provident quo error adipisci, sit ipsam,
          reprehenderit at. Similique exercitationem officia sint recusandae,
          ipsam praesentium molestias illum nobis quae eligendi maiores voluptas
          consequatur perferendis tenetur laboriosam beatae, in inventore
          veritatis ratione magnam. Officiis dolorem voluptatem ipsa impedit
          repellendus molestias natus quidem doloremque accusantium libero quae,
          totam cupiditate aliquid maxime, sunt dicta. In repellat enim
          exercitationem autem modi debitis blanditiis ullam inventore adipisci
          at aperiam fuga expedita quibusdam reprehenderit totam asperiores
          aliquid, nam vitae quisquam delectus velit sit tempore soluta animi.
          Nulla temporibus velit est excepturi, fuga repudiandae obcaecati
          dolorem vel ad soluta veritatis, corrupti repellat iure tempore sequi
          nihil incidunt nisi ipsam dolores earum. Vel quod voluptate accusamus
          veniam, natus distinctio eos doloribus explicabo inventore mollitia
          totam repudiandae eius magnam neque earum voluptatibus tempore itaque
          perferendis assumenda fugiat fuga culpa commodi ducimus? Sint, fugit
          nobis vero animi aliquam incidunt dicta sapiente dolore corporis natus
          reprehenderit laboriosam architecto repudiandae, vitae obcaecati,
          blanditiis nisi doloribus possimus. Officiis sed veniam vel laborum
          quos pariatur quae, accusantium fuga voluptas atque eaque possimus
          perspiciatis vero quia? Eos, assumenda nemo impedit perferendis dicta
          laborum accusantium tempora odit eum pariatur cum architecto illum a
          quod maiores quisquam ipsam molestiae neque excepturi debitis vero qui
          fugiat doloremque eaque! Dolores voluptatibus, cumque unde voluptate
          earum nihil iusto perspiciatis odit nulla deserunt voluptatem harum
          rerum aliquid dolorum adipisci asperiores tempora veniam molestias
          illo suscipit! Aliquid rem assumenda aspernatur. Deserunt ipsam
          nesciunt reiciendis perspiciatis commodi eius odit explicabo, quidem
          nihil minima neque, aspernatur dicta praesentium facilis ex dolorum
          non animi voluptatum atque rerum! Distinctio iste excepturi alias
          tenetur vitae odio reprehenderit, reiciendis in voluptatum eos
          recusandae est molestias ipsa quo veritatis at? Harum amet laborum
          quos molestiae a odit corporis nostrum voluptatem fuga facilis?
          Aliquam laudantium sunt cupiditate quidem et dolorum, rerum vel
          debitis, dignissimos, assumenda architecto expedita. Deleniti nihil
          culpa voluptatum odio officia facere quo voluptas omnis, consectetur
          ducimus pariatur hic, quis a dolorum repellendus sapiente asperiores?
          Tenetur assumenda iste neque, at earum maxime? Quidem eveniet quasi
          repellat dignissimos facere voluptatum iste ad nostrum amet. Illum eos
          sed possimus! Natus magni adipisci sunt ipsum eligendi! Beatae,
          asperiores reprehenderit recusandae possimus molestias omnis doloribus
          laudantium earum quaerat iste ex! Sequi dolores rerum dolore eos eum
          maxime illum laborum in, quisquam tenetur delectus praesentium
          perspiciatis vitae. Facere, exercitationem distinctio? Quaerat
          necessitatibus error magni culpa, recusandae quisquam ut aliquid et,
          excepturi fugit incidunt. Culpa voluptates assumenda porro neque!
          Fugit repudiandae impedit dicta itaque nam assumenda ullam nemo natus
          ipsa, reiciendis aspernatur facere dolor numquam illum distinctio
          officia. Blanditiis quaerat cum placeat repellat minus officiis
          expedita, quos animi provident voluptatibus ullam commodi incidunt
          sunt tenetur iste natus odit vel aliquid? Aspernatur, necessitatibus.
          Voluptatum adipisci sint ducimus dolor corrupti magnam, dolorum quasi
          at pariatur fuga harum, molestias tempore ipsum fugit, est officia
          doloribus facere praesentium iusto quis consequuntur? Accusamus,
          ratione repudiandae, aliquam fugit soluta quia ab ipsa culpa quaerat,
          tenetur sint! Necessitatibus nam in fuga. Eaque ratione itaque aperiam
          molestias autem sed blanditiis eius consequuntur? Possimus
          voluptatibus praesentium voluptatem blanditiis perferendis aperiam,
          corrupti voluptate neque animi debitis soluta dolor recusandae eveniet
          eligendi molestias unde similique ab reprehenderit, aut maxime nulla
          quos? Quibusdam possimus voluptates eum quis voluptate accusantium
          necessitatibus magni officia quam error deserunt vero perferendis vel
          nostrum, esse at provident deleniti assumenda quidem voluptatibus
          atque, voluptatum itaque! Incidunt aspernatur doloremque dolore labore
          expedita fugit id molestiae quas ipsum tenetur impedit repudiandae
          nisi et veritatis atque placeat eius ea, deserunt tempore nam est
          magni architecto. Voluptatibus molestias, fugiat iusto illum explicabo
          facere dolorum qui eligendi accusantium officiis! Quae consequuntur
          facere repellat deleniti non omnis sapiente fuga dolore? Corrupti
          facere consectetur deserunt quibusdam.
        </StyledContent>
      </SectionContent>
    </Container>
  );
};
