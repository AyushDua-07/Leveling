import Consultant from '../models/Consultant.js';
import Availability from '../models/Availability.js';

export const getAdvisors = async (req, res) => {
  try {
    const { query, industry } = req.query;
    const filter = { verificationStatus: 'approved' };

    let consultants = await Consultant.find(filter).populate('userId');

    // Rename userId to user in response
    let results = consultants.map((c) => {
      const obj = c.toObject();
      obj.user = obj.userId;
      delete obj.userId;
      return obj;
    });

    if (query) {
      const q = query.toLowerCase();
      results = results.filter(
        (c) =>
          c.user?.fullName?.toLowerCase().includes(q) ||
          c.specialization?.toLowerCase().includes(q) ||
          c.bio?.toLowerCase().includes(q)
      );
    }

    if (industry) {
      const ind = industry.toLowerCase();
      results = results.filter((c) => c.specialization?.toLowerCase().includes(ind));
    }

    res.json(results);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getAdvisorById = async (req, res) => {
  try {
    const consultant = await Consultant.findById(req.params.id).populate('userId');
    if (!consultant) {
      return res.status(404).json({ message: 'Consultant not found' });
    }
    const obj = consultant.toObject();
    obj.user = obj.userId;
    delete obj.userId;
    res.json(obj);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getAdvisorAvailability = async (req, res) => {
  try {
    const slots = await Availability.find({
      consultantId: req.params.id,
      isBooked: false,
    });
    res.json(slots);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
