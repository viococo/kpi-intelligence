// Import
//// Packages
import React, { Component } from "react";
import { Link } from "react-router-dom";
import ReactTable from "react-table";
import "react-table/react-table.css";
import { Input, Card } from "reactstrap";
import { Formik } from "formik";
//// Interne
import { api } from "../utils/api";
//

class Home extends Component {
  state = {
    investissements: []
  };
  componentDidMount() {
    // Remplissage de la BDD
    api({ route: "/init", method: "post" })
      .then(() => {
        // Récuppération des investissements
        api({ route: "/investissement", method: "get" })
          .then(investissements => this.setState({ investissements }))
          .catch(console.error);
      })
      .catch(console.error);
  }

  onSubmit = (values, { setSubmitting }) => {
    console.log(values);
    const { ville = "", avancement = "" } = values;

    let route = "/investissement";
    route = `/investissement?ville=${ville.trim()}&avancement=${avancement.trim()}`;
    console.log(route);
    api({
      route,
      method: "get"
    })
      .then(investissements => this.setState({ investissements }))
      .catch(console.error);

    setSubmitting(false);
  };

  render() {
    const { investissements } = this.state;
    return (
      <div>
        <h1 className="text-center mb-4 mx-auto">
          Liste de tous les investissements
        </h1>
        <h2 className="text-center mb-4">Filtres</h2>
        <Formik
          onSubmit={this.onSubmit}
          render={({ handleSubmit, handleChange }) => (
            <form
              onSubmit={handleSubmit}
              className="d-flex justify-content-center"
            >
              <Input
                name="ville"
                className="mr-2"
                placeholder="Ville"
                onChange={handleChange}
                onKeyUp={evt => {
                  return evt.keyCode === 13 && handleSubmit;
                }}
                type="text"
              />
              <Input
                name="avancement"
                className="ml-2"
                placeholder="Etat d'avancement"
                onChange={handleChange}
                onKeyUp={evt => evt.keyCode === 13 && handleSubmit}
                type="text"
              />
              <button type="submit" className="d-none" />
            </form>
          )}
        />
        <Card className="mt-4">
          <ReactTable
            data={investissements}
            columns={[
              {
                Header: "Titre de l'opération",
                accessor: "titreoperation",
                Cell: ({ row }) => (
                  <Link to={`/investissement/${row._original._id}`}>
                    {row.titreoperation}
                  </Link>
                )
              },
              { Header: "Entreprise", accessor: "entreprise" },
              { Header: "Ville", accessor: "ville" },
              { Header: "Etat d'avancement", accessor: "etat_d_avancement" }
            ]}
            previousText="Précédent"
            nextText="Suivant"
            loadingText="Chargement..."
            noDataText="Aucune donnée trouvé"
            pageText="Page"
            ofText="sur"
            rowsText="lignes"
          />
        </Card>
      </div>
    );
  }
}

export default Home;
