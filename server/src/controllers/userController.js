import User from "../models/User.js";

export const updateUserProfile = async (req, res) => {
    try {
        const { name, bio, collegeName, startYear, endYear, profilePic } = req.body;

        if (name !== undefined && !name.trim()) {
            return res.status(400).json({ message: "Name cannot be empty" })
        }
        if (startYear !== undefined && isNaN(Number(startYear))) {
            return res.status(400).json({ message: "Start year must be a valid number" })
        }
        if (endYear !== undefined && isNaN(Number(endYear))) {
            return res.status(400).json({ message: "End year must be a valid number" })
        }


        const user = await User.findById(req.user.id);
        if (!user) {
            return res.status(404).json({ message: "User not found" })
        }

        user.name = name || user.name;
        user.bio = bio || user.bio;
        user.collegeName = collegeName || user.collegeName;
        user.startYear = startYear || user.startYear;
        user.endYear = endYear || user.endYear;
        user.profilePic = profilePic || user.profilePic;

        const updatedUser = await user.save();

        res.status(200).json({
            message: "Profile updated succesfully",
            user: updatedUser
        });

    }
    catch (err) {
        console.error(err)
        res.status(500).json({ message: "Internal server error" })
    }
}