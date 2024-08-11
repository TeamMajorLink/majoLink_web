import React from 'react';
import styled from 'styled-components';
import background from '../assets/class/HomePage_sliding.png';
import examplepng from '../assets/class/HomePage_example.jpg';
import category1 from '../assets/class/category1.png';
import category2 from '../assets/class/category2.png';
import category3 from '../assets/class/category3.png';
import category4 from '../assets/class/category4.png';
import category5 from '../assets/class/category5.png';
import category6 from '../assets/class/category6.png';
import category7 from '../assets/class/category7.png';
import category8 from '../assets/class/category8.png';


const Container = styled.div`
  width: 100%;
  padding: 20px;
  background-color: #f0f4ff;
`;

const Header = styled.header`
  background-color: #0A033C;
  color: white;
  padding: 90px;
  text-align: left;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const HeaderImage = styled.img`
  width: 100%;
  height: 100%;
`;

const SearchSection = styled.section`
  background-color: linear-gradient(to top, #D9ECFF, #F0F3FF);
  padding: 30px 0;
  text-align: center;
`;
const SearchHeader = styled.h1`
  font-size: 2rem;
  font-family: Rubik;
  font-weight: bolder;
  margin-bottom: 8px;
  margin-top: 5px;
  padding-left: 20px;
`;

const SearchText = styled.h3`
  font-size: 1rem;
  font-family: Rubik;
  font-weight: 10px;
  margin-top: 2px;
  margin-bottom: 30px;
  padding-left: 20px;
`;

const SearchInputWrapper = styled.div`
  position: relative;
  width: 50%;
  margin: 0 auto;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 10px 50px 10px 10px; 
  border-radius: 20px;
  border: 1px solid #e5e5e5;
`;

const SearchButton = styled.button`
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  padding: 0 15px;
  background-color:#49BBBD;
  ;
  color: white;
  border: none;
  border-radius: 0 15px 15px 0;
  cursor: pointer;
`;


const CategoryWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 20px;
`;

const CategoryButton = styled.button`
  background-color: #49BBBD;
  color: white;
  border: none;
  border-radius: 10px;
  padding: 35px 40px;
  margin: 5px;
  cursor: pointer;
`;

const CategoryImg = styled.img`
  width: 40px;
  height: 40px;
`;

const CategoryText = styled.h3`
  font-size: 1em;
  font-style: white;
  margin-top: 10px;
`;

const ClassSection = styled.section`
  padding: 80px 0;
  background-color: white;
`;

const ClassTitle = styled.h2`
  font-size: 1.8em;
  margin-bottom: 20px;
  padding-left: 50px;
`;

const ClassGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  padding: 0 50px;
`;

const ClassCard = styled.div`
  background-color: white;
  padding: 3px 20px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const ClassImage = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
  background-color: white;
`;

const ClassContent = styled.div`
  padding: 15px;
`;

const ClassTitleText = styled.h3`
  font-size: 2rem;
`;

const ClassInstruction= styled.div`
  font-size: 1rem;
  color: #9d9b9b;
`;

const ClassRating = styled.div`
  font-size: 1rem;
  color: black;
`;

const ClassPeopleListening = styled.div`
  font-size: 1rem;
  color: black
`;


function HomePage() {
  return <Container>
    <Header>
      <HeaderImage src={background} alt="Marketing Image" />
    </Header>

    <SearchSection>
      <SearchHeader>클래스 조회</SearchHeader>
      <SearchText>들고 싶은 클래스를 검색해보세요.</SearchText>
      <SearchInputWrapper>
        <SearchInput type="text" placeholder="들고 싶은 클래스를 검색해보세요." />
        <SearchButton>검색</SearchButton>
      </SearchInputWrapper>
      <CategoryWrapper>
        <CategoryButton>
          <CategoryImg src = {category1} alt="img" />
          <CategoryText>인문과학</CategoryText>
        </CategoryButton>
        <CategoryButton>
          <CategoryImg src = {category2} alt="img" />
          <CategoryText>사회과학</CategoryText>
        </CategoryButton>
        <CategoryButton>
          <CategoryImg src = {category3} alt="img" />
          <CategoryText>공학</CategoryText>
        </CategoryButton>
        <CategoryButton>
          <CategoryImg src = {category4} alt="img" />
          <CategoryText>자연과학</CategoryText>
        </CategoryButton>
        <CategoryButton>
          <CategoryImg src = {category5} alt="img" />
          <CategoryText>교육학</CategoryText>
        </CategoryButton>
        <CategoryButton>
          <CategoryImg src = {category6} alt="img" />
          <CategoryText>의약학</CategoryText>
        </CategoryButton>
        <CategoryButton>
          <CategoryImg src = {category7} alt="img" />
          <CategoryText>예체능</CategoryText>
        </CategoryButton>
        <CategoryButton>
          <CategoryImg src = {category8} alt="img" />
          <CategoryText>기타</CategoryText>
        </CategoryButton>
      </CategoryWrapper>
    </SearchSection>

    <ClassSection>
      <ClassTitle>⭐지금 인기 있는 클래스</ClassTitle>
      <ClassGrid>
        <ClassCard>
          <ClassImage src={examplepng} alt="Marketing Image" />
          <ClassContent>
            <ClassTitleText>비즈니스 영어 회화</ClassTitleText>
            <ClassInstruction>인문과학 {'>'} 영어영문</ClassInstruction>
            <ClassRating>⭐ 4.2</ClassRating>
            <ClassPeopleListening>👥2/5</ClassPeopleListening>
          </ClassContent>
        </ClassCard>
        <ClassCard>
          <ClassImage src={examplepng} alt="Marketing Image" />
          <ClassContent>
            <ClassTitleText>C 프로그래밍</ClassTitleText>
            <ClassInstruction>인문과학 {'>'} 영어영문</ClassInstruction>
            <ClassRating>⭐ 4.2</ClassRating>
            <ClassPeopleListening>👥2/5</ClassPeopleListening>
          </ClassContent>
        </ClassCard>
        <ClassCard>
          <ClassImage src={examplepng} alt="기계요소 설계" />
          <ClassContent>
            <ClassTitleText>기계요소 설계</ClassTitleText>
            <ClassInstruction>인문과학 {'>'} 영어영문</ClassInstruction>
            <ClassRating>⭐ 4.2</ClassRating>
            <ClassPeopleListening>👥2/5</ClassPeopleListening>
          </ClassContent>
        </ClassCard>
        <ClassCard>
          <ClassImage src={examplepng} alt="디지털 마케팅" />
          <ClassContent>
            <ClassTitleText>디지털 마케팅</ClassTitleText>
            <ClassInstruction>인문과학 {'>'} 영어영문</ClassInstruction>
            <ClassRating>⭐ 4.2</ClassRating>
            <ClassPeopleListening>👥2/5</ClassPeopleListening>
          </ClassContent>
        </ClassCard>
      </ClassGrid>
    </ClassSection>

    <ClassSection>
      <ClassTitle>🔎새로 등록된 클래스</ClassTitle>
      <ClassGrid>
        <ClassCard>
          <ClassImage src={examplepng} alt="비즈니스 영어 회화" />
          <ClassContent>
            <ClassTitleText>비즈니스 영어 회화</ClassTitleText>
            <ClassInstruction>인문과학 {'>'} 영어영문</ClassInstruction>
            <ClassRating>⭐ 4.2</ClassRating>
            <ClassPeopleListening>👥2/5</ClassPeopleListening>
          </ClassContent>
        </ClassCard>
        <ClassCard>
          <ClassImage src={examplepng} alt="C 프로그래밍" />
          <ClassContent>
            <ClassTitleText>C 프로그래밍</ClassTitleText>
            <ClassInstruction>인문과학 {'>'} 영어영문</ClassInstruction>
            <ClassRating>⭐ 4.2</ClassRating>
            <ClassPeopleListening>👥2/5</ClassPeopleListening>
          </ClassContent>
        </ClassCard>
        <ClassCard>
          <ClassImage src={examplepng} alt="기계요소 설계" />
          <ClassContent>
            <ClassTitleText>기계요소 설계</ClassTitleText>
            <ClassInstruction>인문과학 {'>'} 영어영문</ClassInstruction>
            <ClassRating>⭐ 4.2</ClassRating>
            <ClassPeopleListening>👥2/5</ClassPeopleListening>
          </ClassContent>
        </ClassCard>
        <ClassCard>
          <ClassImage src={examplepng} alt="디지털 마케팅" />
          <ClassContent>
            <ClassTitleText>디지털 마케팅</ClassTitleText>
            <ClassInstruction>인문과학 {'>'} 영어영문</ClassInstruction>
            <ClassRating>⭐ 4.2</ClassRating>
            <ClassPeopleListening>👥2/5</ClassPeopleListening>
          </ClassContent>
        </ClassCard>
      </ClassGrid>
    </ClassSection>

    <ClassSection>
      <ClassTitle>🔥모집 인원 마감 임박 클래스</ClassTitle>
      <ClassGrid>
        <ClassCard>
          <ClassImage src={examplepng} alt="비즈니스 영어 회화" />
          <ClassContent>
            <ClassTitleText>비즈니스 영어 회화</ClassTitleText>
            <ClassInstruction>인문과학 {'>'} 영어영문</ClassInstruction>
            <ClassRating>⭐ 4.2</ClassRating>
            <ClassPeopleListening>👥2/5</ClassPeopleListening>
          </ClassContent>
        </ClassCard>
        <ClassCard>
          <ClassImage src={examplepng} alt="C 프로그래밍" />
          <ClassContent>
            <ClassTitleText>C 프로그래밍</ClassTitleText>
            <ClassInstruction>인문과학 {'>'} 영어영문</ClassInstruction>
            <ClassRating>⭐ 4.2</ClassRating>
            <ClassPeopleListening>👥2/5</ClassPeopleListening>
          </ClassContent>
        </ClassCard>
        <ClassCard>
          <ClassImage src={examplepng} alt="기계요소 설계" />
          <ClassContent>
            <ClassTitleText>기계요소 설계</ClassTitleText>
            <ClassInstruction>인문과학 {'>'} 영어영문</ClassInstruction>
            <ClassRating>⭐ 4.2</ClassRating>
            <ClassPeopleListening>👥2/5</ClassPeopleListening>
          </ClassContent>
        </ClassCard>
        <ClassCard>
          <ClassImage src={examplepng} alt="디지털 마케팅" />
          <ClassContent>
            <ClassTitleText>디지털 마케팅</ClassTitleText>
            <ClassInstruction>인문과학 {'>'} 영어영문</ClassInstruction>
            <ClassRating>⭐ 4.2</ClassRating>
            <ClassPeopleListening>👥2/5</ClassPeopleListening>
          </ClassContent>
        </ClassCard>
      </ClassGrid>
    </ClassSection>
    
  </Container>
}

export default HomePage;
