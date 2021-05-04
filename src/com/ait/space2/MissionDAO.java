package com.ait.space2;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;


public class MissionDAO {
    public List<Mission> findAll() {
        List<Mission> list = new ArrayList<Mission>();
        Connection c = null;
    	String sql = "SELECT * FROM shuttles ORDER BY id";
        try {
            c = ConnectionHelper.getConnection();
            PreparedStatement ps = c.prepareStatement(sql);
            ResultSet rs = ps.executeQuery();
            while (rs.next()) {
                list.add(processRowMission(rs));
            }
        } catch (SQLException e) {
            e.printStackTrace();
            throw new RuntimeException(e);
		} finally {
			ConnectionHelper.close(c);
		}
        return list;
    }
    
    public Mission findById(int id) {
    	String sql = "SELECT * FROM shuttles WHERE id = ?";
    	Mission mission = null;
        Connection c = null;
        try {
            c = ConnectionHelper.getConnection();
            PreparedStatement ps = c.prepareStatement(sql);
            ps.setInt(1, id);
            ResultSet rs = ps.executeQuery();
            if (rs.next()) {
                mission = processRowMission(rs);
            }
        } catch (Exception e) {
            e.printStackTrace();
            throw new RuntimeException(e);
		} finally {
			ConnectionHelper.close(c);
		}
        return mission;
    }
    
    protected Mission processRowMission(ResultSet rs) throws SQLException {
        Mission mission = new Mission();
        mission.setId(rs.getInt("id"));
        mission.setName(rs.getString("name"));
        mission.setImagethumb(rs.getString("image_thumb"));
        mission.setImagemain(rs.getString("image_main"));
        mission.setImagecaption(rs.getString("image_caption"));
        mission.setDescription(rs.getString("description"));
        return mission;
    }
    
}
