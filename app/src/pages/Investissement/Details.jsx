// Import
//// Packages
import React, { Component } from "react";
import { Card, CardBody } from "reactstrap";
import { Route, Redirect } from "react-router-dom";
//// Interne
import { api } from "../../utils/api";
//

class Details extends Component {
  state = {};

  componentDidMount() {
    const {
      match: {
        params: { id }
      }
    } = this.props;

    // Récuppération de l'investissement complet
    api({ route: `/investissement/${id}`, method: "get" })
      .then(investissement => this.setState({ ...investissement }))
      .catch(console.error);
  }

  render() {
    const {
      titreoperation,
      etat_d_avancement,
      annee_de_livraison,
      entreprise,

      lycee,
      ville,
      latitude,
      longitude,

      mandataire,
      ppi,
      notification_du_marche,
      codeuai,
      montant_des_ap_votes_en_meu,
      cao_attribution,
      maitrise_d_oeuvre,
      mode_de_devolution,
      annee_d_individualisation,
      enveloppe_prev_en_meu
    } = this.state;
    console.log(this.state);
    return (
      <div>
        <Route
          exact
          path="/"
          render={() => !titreoperation && <Redirect to="/" />}
        />
        <h1 className="mb-4 text-center mx-auto">{titreoperation}</h1>
        <div className="d-flex mb-3">
          <Card className="mr-3 flex-fill">
            <CardBody>
              <strong>Code UAI:</strong> {codeuai}
              <br />
              <strong>Etat d'avancement:</strong> {etat_d_avancement}
              <br />
              <strong>Année de livraison:</strong> {annee_de_livraison}
              <br />
              <strong>Entreprise:</strong> {entreprise}
            </CardBody>
          </Card>

          <Card className="flex-fill">
            <CardBody>
              <strong>Lycée:</strong> {lycee}
              <br />
              <strong>Ville:</strong> {ville}
              <br />
              <strong>Latitude:</strong> {latitude}
              <br />
              <strong>Longitude:</strong> {longitude}
            </CardBody>
          </Card>
        </div>

        <Card>
          <CardBody>
            <strong>Mandataire:</strong> {mandataire}
            <br />
            <strong>PPI:</strong> {ppi}
            <br />
            <strong>Notification du marché:</strong>{" "}
            {new Date(notification_du_marche).toLocaleDateString()}
            <br />
            <strong>Montant des ap votes en MEU:</strong>{" "}
            {montant_des_ap_votes_en_meu}
            <br />
            <strong>CAO attribution:</strong>{" "}
            {new Date(cao_attribution).toLocaleDateString()}
            <br />
            <strong>Maîtrise d'oeuvre:</strong> {maitrise_d_oeuvre}
            <br />
            <strong>Mode de dévolution:</strong> {mode_de_devolution}
            <br />
            <strong>Année d'invisidualisation</strong>{" "}
            {annee_d_individualisation}
            <br />
            <strong>Enveloppe prévisionnelle en MEU:</strong>{" "}
            {enveloppe_prev_en_meu}
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default Details;
