import Cab from "../modals/cab.modal.js";

// Add cab details
export const addCabDetails = async (req, res) => {
  try {
    const driverId = req.body.userId;
    const location = req.body.location.toLowerCase();
    const newCab = new Cab({
      ...req.body,
      driverId: driverId,
      location: location,
    });
    await newCab.save();
    res.status(200).send({ message: "Cab details added successfully", data: newCab });
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: err });
  }
};


export const updateCabDetails = async (req, res) => {
  try {
    const cabId = req.params.id;
    const updatedCab = await Cab.findByIdAndUpdate(
      cabId, {
        ...req.body,
      }
    );
    if (!updatedCab) {
      return res.status(404).send({ message: "Cab not found" });
    }
    res.status(200).send({ message: "Cab details updated successfully", data: updatedCab });
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: err });
  }
};


// Get cab details by user
export const getCabDetailsByUser = async (req, res) => {
  try {
    console.log("hello")
    const driverId = req.params.driverId;
    console.log(req.params);
    const cabDetails = await Cab.find({ driverId });

    if (cabDetails.length === 0) {
      return res.status(404).send({ message: "No cab details found for the user" });
    }

    res.status(200).send({ message: "Cab Details retrived successfully", data: cabDetails });
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: err });
  }
};
