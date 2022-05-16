// import { css } from '@stitches/react';
import { whiteA } from '@radix-ui/colors';
import { blue } from '@radix-ui/colors/types/dark/blue';
import { Button, CardUser, CardBio, Card } from './financeDashboard.style';
import { css } from './financeDashboard.style';

const box = css({});

const FinanceDashboard = () => {
  return (
    <div
      className={box({
        css: {
          flexCenterAll: {
            justifyContent: 'end',
          },
        },
      })}
    >
      <Button>Teste</Button>
      <Card>
        <h2>Jamile Lopes Almeida</h2>
        <div className="description">
          <p>23 anos</p>
          <p>UX / UI Designer</p>
        </div>
        <span>Suzano, SP, Brasil</span>
      </Card>
      <Card bio>
        <h2>👩🏾‍ Quem sou eu</h2>
        <p
          className={box(
            css({
              ...whiteA,
            })
          )}
        >
          Me chamo Jamile, tenho um 🐕‍🦺e um 🐱, adoro filmes e séries, e sou
          apaixonada por como os processos criativos são elaborados.
        </p>
        <p>
          Por conta disso e por tentar entender como funciona a mente humana, me
          formei em Psicologia. Até que um dia descobri o UX, que juntava três
          coisas que eu já amava: Tecnologia, Interações humanas e Design.
        </p>
      </Card>
    </div>
  );
};

export default FinanceDashboard;
