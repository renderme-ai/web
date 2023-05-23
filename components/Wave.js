import styled from '@emotion/styled';

const Wave = styled.div`
  --mask: radial-gradient(42.43px at 50% 60px, #e3eeff 99%, #0000 101%)
      calc(50% - 60px) 0/120px 100%,
    radial-gradient(42.43px at 50% -30px, #0000 99%, #e3eeff 101%) 50% 30px/120px
      100% repeat-x;
  -webkit-mask: var(--mask);
  mask: var(--mask);
  background: #673ab7;
  width: 100%;
  margin-top: -150px;
  height: 150px;
`;

export default Wave;
