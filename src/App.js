
import './App.css';
import MainBio from './Component/MainBio';
import MainFullName from './Component/MainFullName';
import MainImage from './Component/MainImage';
import MainNavbar from './Component/MainNavbar';
import MainProfession from './Component/MainProfession';
function App() {
  const fullName ="Adolf Hitler"
  const profession =" create by IHEB KHALLOUFI"
  const image ="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Bundesarchiv_Bild_183-H1216-0500-002%2C_Adolf_Hitler.jpg/220px-Bundesarchiv_Bild_183-H1216-0500-002%2C_Adolf_Hitler.jpg"
  const bio ="Adolf Hitler [ˈadɔlf ˈhɪtlɐ]n 1 Écouter est un idéologue et homme d'État allemand, né le 20 avril 1889 à Braunau am Inn en Autriche-Hongrie (aujourd'hui en Autriche et toujours ville-frontière avec l’Allemagne) et mort par suicide le 30 avril 1945 à Berlin. Fondateur et figure centrale du nazisme, il prend le pouvoir en Allemagne en 1933 et instaure une dictature totalitaire, impérialiste, antisémite, raciste et xénophobe désignée sous le nom de Troisième Reich. "
  return (
    <div className="App">
      <MainNavbar />
      <MainImage image={image} />
      <MainFullName fullName={fullName}/>
      <MainBio bio ={bio}/> 
      <MainProfession profession={profession}/>
    </div>
  );
}

export default App;
