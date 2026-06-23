function LocationPopup({ onAccept, onReject }) {

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

      <div className="bg-white p-6 rounded-xl shadow-xl w-96">

        <h2 className="text-xl font-bold mb-3">
          Autoriser la localisation
        </h2>

        <p className="text-gray-600 mb-5">
          Autorisez votre position pour afficher la météo de votre région.
          Sinon Dakar sera utilisée par défaut.
        </p>


        <div className="flex gap-3">

          <button
            onClick={onAccept}
            className="bg-green-600 text-white px-4 py-2 rounded"
          >
            Autoriser
          </button>


          <button
            onClick={onReject}
            className="bg-gray-300 px-4 py-2 rounded"
          >
            Refuser
          </button>

        </div>

      </div>

    </div>
  )
}


export default LocationPopup;