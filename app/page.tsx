import ConceptMap from './components/ConceptMap';
import ZoneMap from './components/ZoneMap';

export default function Page() {
  return (
    <>
      <ConceptMap />

      <section className="section" id="sebaran-fauna">
        <h2>Sebaran Fauna Indonesia</h2>
        <div className="grid">
          <div className="card">
            <h3>Zona Barat (Sunda)</h3>
            <ul>
              <li>Meliputi: Sumatra, Jawa, Kalimantan, Bali dan pulau sekitarnya.</li>
              <li>Karakter: Didominasi mamalia Asia; keanekaragaman primata tinggi.</li>
              <li>Contoh habitat: hutan hujan dataran rendah dipterokarpa, rawa gambut, mangrove.</li>
            </ul>
          </div>
          <div className="card">
            <h3>Zona Tengah (Wallacea)</h3>
            <ul>
              <li>Meliputi: Sulawesi, Nusa Tenggara, dan sebagian Maluku.</li>
              <li>Karakter: Campuran unsur Asia?Australasia; tingkat endemisme sangat tinggi.</li>
              <li>Contoh habitat: karst Sulawesi, savana NTT, hutan pegunungan.</li>
            </ul>
          </div>
          <div className="card">
            <h3>Zona Timur (Australasia)</h3>
            <ul>
              <li>Meliputi: Papua, Kep. Aru, dan sebagian Maluku timur.</li>
              <li>Karakter: Unsur fauna Australasian; banyak burung endemik.</li>
              <li>Contoh habitat: hutan sagu, hutan pegunungan tengah, rawa-rawa pesisir.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section" id="sebaran-flora">
        <h2>Sebaran Flora Indonesia</h2>
        <div className="grid">
          <div className="card">
            <h3>Zona Barat (Sunda)</h3>
            <ul>
              <li>Dominasi Dipterocarpaceae (meranti), hutan hujan lebat, rawa gambut.</li>
              <li>Keanekaragaman bunga raksasa seperti <em>Rafflesia</em> dan <em>Amorphophallus</em>.</li>
            </ul>
          </div>
          <div className="card">
            <h3>Zona Tengah (Wallacea)</h3>
            <ul>
              <li>Vegetasi campuran hutan hujan, savana musiman, dan pantai kering.</li>
              <li>Tumbuhan bernilai ekonomi tinggi seperti cendana dan pala.</li>
            </ul>
          </div>
          <div className="card">
            <h3>Zona Timur (Australasia)</h3>
            <ul>
              <li>Dominasi sagu, hutan rawa, eukaliptus/kayu putih, dan konifer pegunungan.</li>
              <li>Banyak spesies endemik Papua seperti matoa dan ara berdaun raksasa.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section" id="fauna-khas">
        <h2>Fauna Khas per Zona (? 5 tiap zona)</h2>
        <div className="scroll-x">
          <table className="table">
            <thead>
              <tr>
                <th>Zona</th>
                <th>Fauna Khas</th>
                <th>Ciri Khas</th>
                <th>Sebaran</th>
              </tr>
            </thead>
            <tbody>
              {/* Barat */}
              <tr>
                <td>Barat (Sunda)</td>
                <td>Harimau Sumatra (<em>Panthera tigris sumatrae</em>)</td>
                <td>Ukuran relatif kecil; loreng rapat; terancam kritis.</td>
                <td>Sumatra (TN Kerinci Seblat, TN Gunung Leuser)</td>
              </tr>
              <tr>
                <td>Barat (Sunda)</td>
                <td>Badak Jawa (<em>Rhinoceros sondaicus</em>)</td>
                <td>Bercula satu; populasi sangat kecil.</td>
                <td>Ujung Kulon (Banten)</td>
              </tr>
              <tr>
                <td>Barat (Sunda)</td>
                <td>Orangutan Kalimantan (<em>Pongo pygmaeus</em>)</td>
                <td>Lengan sangat panjang; arboreal; cerdas.</td>
                <td>Kalimantan (hutan hujan dataran rendah)</td>
              </tr>
              <tr>
                <td>Barat (Sunda)</td>
                <td>Gajah Sumatra (<em>Elephas maximus sumatranus</em>)</td>
                <td>Lebih kecil dari gajah Asia daratan; telinga relatif besar.</td>
                <td>Sumatra bagian tengah?selatan</td>
              </tr>
              <tr>
                <td>Barat (Sunda)</td>
                <td>Bekantan (<em>Nasalis larvatus</em>)</td>
                <td>Hidung besar pada jantan; penghuni mangrove/ rawa.</td>
                <td>Kalimantan pesisir dan rawa-rawa</td>
              </tr>

              {/* Tengah */}
              <tr>
                <td>Tengah (Wallacea)</td>
                <td>Anoa (<em>Bubalus quarlesi/ depressicornis</em>)</td>
                <td>Kerbau kerdil endemik; tanduk runcing.</td>
                <td>Sulawesi (hutan pegunungan & dataran rendah)</td>
              </tr>
              <tr>
                <td>Tengah (Wallacea)</td>
                <td>Babirusa (<em>Babyrousa</em> spp.)</td>
                <td>Gigi taring melengkung ke atas; omnivora.</td>
                <td>Sulawesi, Buru, Taliabu</td>
              </tr>
              <tr>
                <td>Tengah (Wallacea)</td>
                <td>Tarsius (<em>Tarsius</em> spp.)</td>
                <td>Mata sangat besar; nokturnal; lompatan jauh.</td>
                <td>Sulawesi dan kepulauan sekitarnya</td>
              </tr>
              <tr>
                <td>Tengah (Wallacea)</td>
                <td>Maleo (<em>Macrocephalon maleo</em>)</td>
                <td>Menetaskan telur di pasir panas/ geothermal.</td>
                <td>Pesisir Sulawesi (Kolonedale, Tompotika, dll.)</td>
              </tr>
              <tr>
                <td>Tengah (Wallacea)</td>
                <td>Kuskus (<em>Phalanger/Spilocuscus</em> spp.)</td>
                <td>Marsupial arboreal; ekor prehensil.</td>
                <td>Maluku, Sulawesi Utara, Nusa Tenggara Timur</td>
              </tr>

              {/* Timur */}
              <tr>
                <td>Timur (Australasia)</td>
                <td>Cenderawasih (<em>Paradisaeidae</em>)</td>
                <td>Bulunya indah; perilaku kawin unik (lek).</td>
                <td>Papua & Kep. Aru</td>
              </tr>
              <tr>
                <td>Timur (Australasia)</td>
                <td>Kasuari (<em>Casuarius</em> spp.)</td>
                <td>Burung tak terbang besar; memiliki helm (casque).</td>
                <td>Papua dan Maluku bagian timur</td>
              </tr>
              <tr>
                <td>Timur (Australasia)</td>
                <td>Kangguru pohon (<em>Dendrolagus</em> spp.)</td>
                <td>Marsupial arboreal; kaki belakang kuat.</td>
                <td>Pegunungan Papua</td>
              </tr>
              <tr>
                <td>Timur (Australasia)</td>
                <td>Kakatua jambul kuning (<em>Cacatua galerita/ sulphurea</em>)</td>
                <td>Jambul kuning mencolok; vokal keras.</td>
                <td>Timur Nusa Tenggara hingga Papua</td>
              </tr>
              <tr>
                <td>Timur (Australasia)</td>
                <td>Nuri pelangi (<em>Trichoglossus haematodus</em>)</td>
                <td>Warna-warni; lidah berus (nectar feeder).</td>
                <td>Maluku dan Papua</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="section" id="flora-khas">
        <h2>Flora Khas per Zona (? 5 tiap zona)</h2>
        <div className="scroll-x">
          <table className="table">
            <thead>
              <tr>
                <th>Zona</th>
                <th>Flora Khas</th>
                <th>Ciri/Manfaat</th>
                <th>Sebaran Tempat</th>
              </tr>
            </thead>
            <tbody>
              {/* Barat */}
              <tr>
                <td>Barat (Sunda)</td>
                <td>Rafflesia arnoldii</td>
                <td>Bunga terbesar; parasit pada liana <em>Tetrastigma</em>.</td>
                <td>Sumatra (Bengkulu, TN Kerinci Seblat)</td>
              </tr>
              <tr>
                <td>Barat (Sunda)</td>
                <td>Amorphophallus titanum (bunga bangkai raksasa)</td>
                <td>Spadix tinggi; bau menyengat memikat penyerbuk.</td>
                <td>Sumatra Barat?Bengkulu</td>
              </tr>
              <tr>
                <td>Barat (Sunda)</td>
                <td>Meranti (<em>Shorea</em> spp.)</td>
                <td>Pohon kayu komersial; kanopi hutan dipterokarpa.</td>
                <td>Sumatra & Kalimantan</td>
              </tr>
              <tr>
                <td>Barat (Sunda)</td>
                <td>Ulin/kayu besi (<em>Eusideroxylon zwageri</em>)</td>
                <td>Kayu sangat keras & awet.</td>
                <td>Kalimantan, Sumatra bagian selatan</td>
              </tr>
              <tr>
                <td>Barat (Sunda)</td>
                <td>Anggrek hitam (<em>Coelogyne pandurata</em>)</td>
                <td>Bibit hitam-hijau; anggrek epifit endemik.</td>
                <td>Kalimantan Timur</td>
              </tr>

              {/* Tengah */}
              <tr>
                <td>Tengah (Wallacea)</td>
                <td>Eboni Sulawesi (<em>Diospyros celebica</em>)</td>
                <td>Kayu hitam berpola; bernilai tinggi.</td>
                <td>Sulawesi</td>
              </tr>
              <tr>
                <td>Tengah (Wallacea)</td>
                <td>Cendana (<em>Santalum album</em>)</td>
                <td>Minyak atsiri; wewangian & obat.</td>
                <td>NTT (Timor, Sumba)</td>
              </tr>
              <tr>
                <td>Tengah (Wallacea)</td>
                <td>Lontar (<em>Borassus flabellifer</em>)</td>
                <td>Sumber nira/gula merah; adaptif terhadap kering.</td>
                <td>NTT (Sabu, Rote, Timor)</td>
              </tr>
              <tr>
                <td>Tengah (Wallacea)</td>
                <td>Kenari Maluku (<em>Canarium indicum</em>)</td>
                <td>Biji untuk pangan/ minyak; pohon kanopi.</td>
                <td>Maluku</td>
              </tr>
              <tr>
                <td>Tengah (Wallacea)</td>
                <td>Pala (<em>Myristica fragrans</em>)</td>
                <td>Rempah bersejarah; biji (nutmeg) & fuli (mace).</td>
                <td>Kepulauan Banda, Maluku</td>
              </tr>

              {/* Timur */}
              <tr>
                <td>Timur (Australasia)</td>
                <td>Sagu (<em>Metroxylon sagu</em>)</td>
                <td>Pati pangan utama masyarakat Papua.</td>
                <td>Papua, Maluku</td>
              </tr>
              <tr>
                <td>Timur (Australasia)</td>
                <td>Kayu putih (<em>Melaleuca cajuputi</em>)</td>
                <td>Daun penghasil minyak kayu putih.</td>
                <td>Maluku & Papua pesisir</td>
              </tr>
              <tr>
                <td>Timur (Australasia)</td>
                <td>Ara raksasa (<em>Ficus dammaropsis</em>)</td>
                <td>Daun sangat besar; ikon pegunungan Papua.</td>
                <td>Pegunungan Papua</td>
              </tr>
              <tr>
                <td>Timur (Australasia)</td>
                <td>Matoa (<em>Pometia pinnata</em>)</td>
                <td>Buah manis; pohon kanopi cepat tumbuh.</td>
                <td>Papua & Papua Nugini</td>
              </tr>
              <tr>
                <td>Timur (Australasia)</td>
                <td>Agathis/ Kauri (<em>Agathis labillardieri</em>)</td>
                <td>Konifer; resin/ damar; hutan pegunungan.</td>
                <td>Pegunungan Papua</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="peta-zona">
        <ZoneMap kind="fauna" />
        <ZoneMap kind="flora" />
      </section>
    </>
  );
}
